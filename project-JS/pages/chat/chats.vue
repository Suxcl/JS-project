<template>
    <!-- Whole -->
    <div class="flex gap-4">
      <!-- Left panel -->
      <div class="w-1/3 border h-screen p-4">
        <!-- New chat -->
        <div>
          <button @click="newChat()" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Chat</button>
        </div>
  
        <!-- Search -->
        <div class="mt-4">
          <input type="text" v-model="search" class="border p-2 rounded-md w-full" placeholder="Search chats">
        </div>
  
        <!-- Chat list -->
        <div class="h-full overflow-y-auto mt-4">
          <p class="font-semibold mb-2">Chats</p>
          <ul>
            <li v-for="chat in filteredChats()" :key="chat.name" @click="openChatFun(chat)" class="hover:text-blue-500 cursor-pointer">
              {{ chat.name }}
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Right panel -->
      <div class="w-2/3 border">
        <!-- New chat menu -->
        <div v-if="rightPanel === 0" class="p-4">
          <form @submit.prevent="createChat()">
            <input type="text" v-model="newChatName" class="border p-2 rounded-md mb-4 w-full" placeholder="Chat name">
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2">Create</button>
            <!-- Added users -->
            <div>
              <p class="font-semibold mt-4">Added Users</p>
              <div class="grid grid-cols-4 gap-4">
                <div v-for="user in addedFriends" :key="user.id" @click="removeUserFromChat(user)" class="hover:text-blue-500 p-2 border cursor-pointer">
                  {{ user.name }} {{ user.surname }}
                </div>
              </div>
            </div>
            <!-- Listing friends -->
            <div>
              <p class="font-semibold mt-4">Friends</p>
              <div class="grid grid-cols-4 gap-4">
                <div v-for="friend in friendsList" :key="friend.id" @click="addUserToChat(friend)" class="hover:text-blue-500 p-2 border cursor-pointer">
                  {{ friend.name }} {{ friend.surname }}
                </div>
              </div>
            </div>
          </form>
        </div>
  
        <!-- Selected chat -->
        <div v-else class="p-4">
          <!-- Users -->
          <div class="mb-4">
            <span v-for="user in openChatUsers.reverse()" :key="user.id">
              <label v-if="user">{{ user.name }} | </label>
            </span>
          </div>
          <!-- Messages -->
          <div>
            <p class="font-semibold mb-2">Chat Messages</p>
            <div>
              <div v-for="mess in openChatMessages" :key="mess.id">
                <p>
                  <strong>Author:</strong> {{ openChatUsers.find(u => u.id === mess.authorId)?.name }}
                </p>
                <p>{{ mess.content }}</p>
              </div>
            </div>
            <div class="mt-4">
              <form @submit.prevent="sendMessage()">
                <input type="text" v-model="message" class="border p-2 rounded-md w-full" placeholder="Message">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
    import { ref } from "vue";
    import type { User, Post, Invite, Chat, ChatUser, ChatMessage } from "@prisma/client";
    import { useToast } from "vue-toastification";
    import { useRoute } from "vue-router";

    const toast = useToast()
    const route = useRoute()
    const logUserId = getLoggedUserId()
    // left panel data
    const search = ref('')
    const chats = ref<Chat[]>([])
    // right panel data
    // new chat
    const newChatName = ref('')
    const friendsList = ref<User[]>([])
    const addedFriends = ref<User[]>([])
    // existing chat
    const rightPanel = ref(0);
    const openChat = ref<Chat>()
    const openChatUsers = ref<User[]>([])
    const openChatMessages = ref<ChatMessage[]>([])
    const message = ref('')
    // get chats for left panel
    const  userChats:ChatUser[] = ((await $fetch(`/api/users/chats/${logUserId}`))as any).chats;
    // get names for right panel chats
    setTimeout(() => {
        userChats.forEach(async chat => {
            let tmp = (await $fetch(`/api/chats/${chat.chatId}`, {method: 'GET'})).chat
            if(tmp) chats.value.push(tmp)
        })    
    },500)
    
    const userFriends:number[] = (await $fetch(`/api/users/friends/${logUserId}`) as any).friends
    userFriends.forEach(async (data) => {
        friendsList.value.push(
            (await $fetch(`/api/users/${data }`) as any).user
        )
        console.log(friendsList.value, userFriends)
    })

    if(route.query.id){
        rightPanel.value = Number(route.query.id)
    }

    function newChat() {
        rightPanel.value = 0;
    }

    async function openChatFun(chat: Chat) {
        if(rightPanel.value === chat.id) return
        
        rightPanel.value = chat.id
        openChat.value = chat;
        openChatUsers.value = []
        openChatMessages.value = []

        const tmp_chatUsers:ChatUser[] = (await $fetch(`/api/chats/chatUsers/${chat.id}`) as any).users
        const chatMessages:ChatMessage[] = (await $fetch(`/api/chats/chatMessages/${chat.id}`, {method: 'GET'}) as any).chatMessages
        tmp_chatUsers.forEach(async (chatUser) => {
            openChatUsers.value.push(
                (await $fetch(`/api/users/${chatUser}`, {method: 'GET'}) as any).user
                )
        })
        openChatMessages.value = chatMessages as ChatMessage[]
    }

    async function sendMessage(){
        const answer = await $fetch('/api/chats/chatMessages/message', {
          method: 'POST',
          body: {
            chatId: openChat.value?.id,
            authorId: logUserId,
            content: message.value
          }
        })
        if(answer){
            console.log(answer.chatMessage)
            openChatMessages.value.push(answer.chatMessage)
        }
        message.value = ''
        

    }

    function filteredChats() {
        const searchTerm = search.value.toLowerCase()
        return chats.value.filter(chat => chat.name.toLowerCase().includes(searchTerm))
    }

    async function createChat() {
        if(newChatName.value === ''){
            toast.error("Chat name cannot be empty", {
                timeout: 2000
            })
            return
        } 

        let users_id = addedFriends.value.map(user => user.id)
        users_id.push(logUserId as number)
        let users_id_string: string = JSON.stringify(users_id)
        console.log("users",users_id)
        console.log("users",JSON.stringify(users_id) , typeof(JSON.stringify(users_id)))
        const answer = await $fetch('/api/chats/chat', {
            method: 'POST',
            body:{
                name: newChatName.value,
                users: users_id_string
                
            }
        })
        chats.value.push(answer.chat)

        openChatUsers.value = addedFriends.value
        openChatMessages.value = []
        openChat.value = answer.chat

        newChatName.value = ''
        rightPanel.value = answer.chat.id
        addedFriends.value = []
    }

    function addUserToChat(user: User) {
        addedFriends.value.push(user)
        friendsList.value = friendsList.value.filter(friend => friend.id !== user.id)
    }
    function removeUserFromChat(user: User) {
        friendsList.value.push(user)
        addedFriends.value = addedFriends.value.filter(addedFriend => addedFriend.id !== user.id)
    }

</script>
<template>
    <div>
        <!-- friends -->
        <div>
            <p></p>
        </div>

        
        <!-- chats -->
        <div>
            <p @click="navigateToChats()">Chats</p>
            <ul v-for="chat in chats"> 
                <li @click="navigateToChats(chat.id)" class="hover:text-blue-500">
                    {{chat.name}} 
                </li>
            </ul>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
    import type {Chat, ChatUser} from "@prisma/client";
    import { ref } from "vue";

    const props = defineProps<({
        userChats: ChatUser[];
    })>();
    
    const chats = ref<Chat[]>([])

    setTimeout(() => {
        props.userChats.forEach(async chat => {
            let tmp = (await $fetch(`/api/chats/${chat.chatId}`, {method: 'GET'}) as any).chat
            if(tmp) chats.value.push(tmp)
        })    
    },500)
    
    function navigateToChats(id:number=0){
        if(id === 0){
            navigateTo({path: `/chat/chats}`})    
        }
        navigateTo({path: `/chat/chats`, query: {id:id}})
    }
    
    
</script>
<template>
    <div>
        <!-- friends -->
        <div>
            <p></p>
        </div>

        
        <!-- chats -->
        <div>
            <p>Chats</p>
            <ul v-for="chat in chats"> 
                <li @click="openChat(chat.id)" class="hover:text-blue-500">
                    {{chat.name}} 
                </li>
            </ul>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
    import type {chat, chatUser} from "@prisma/client";
    import { ref } from "vue";

    const props = defineProps<({
        userChats: chatUser[];
    })>();
    
    const chats = ref<chat[]>([])

    setTimeout(() => {
        props.userChats.forEach(async chat => {
            let tmp = (await $fetch(`/api/chats/${chat.chatId}`, {method: 'GET'})).chat
            if(tmp) chats.value.push(tmp)
        })    
    },500)
    
    function openChat(id:number=0){
        
    }
    
    
</script>
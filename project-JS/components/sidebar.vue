<template>
<div v-if="isSomeoneLogged() ">
    <div v-if="!route.fullPath.includes('chats')">
        you are logged
        <ChatsSidebar :userChats="userChats"/>
    </div>
    <div v-else>
        <img src="../assets/lethal-company-shiggy-wiggy.gif" alt="chats">
    </div>
    

</div>
<div v-else>
    You need to be logged to hve access to this panel
</div>
</template>

<script setup lang="ts">
    import type { User, Post, Invite, chat, chatUser } from "@prisma/client";
    import { useRoute } from "vue-router";
    const logUserId = getLoggedUserId()
    const route = useRoute()
    let userChats:chatUser[]


    if(logUserId) userChats= ((await $fetch(`/api/users/chats/${logUserId}`))as any).chats;
    
</script>
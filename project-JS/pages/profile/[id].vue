<template>
  <div class="flex flex-row">
    <!-- Left Column -->
    <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">

      <!-- Profile Info -->
      <div class="mb-6">
        <ProfileInfo :user="user"/>
        <hr class="my-4 border-t-2 border-gray-200">
      </div>

      <!-- Friend Panel -->
      <div class="mb-6">
        <FriendPanel :friends="fullFriendsData"/>
        <hr class="my-4 border-t-2 border-gray-200">
      </div>

      <!-- Pending Invites (Visible only to logged-in user) -->
      <div v-if="logUserId === user.id" class="mb-6">
        <Invites :invites="userPendingInvites"/>
        <hr class="my-4 border-t-2 border-gray-200">
      </div>


    </div>

    <!-- Right Column -->
    <div class="w-2/3 p-6 bg-white rounded-lg shadow-md">

      <!-- User Posts -->
      <div class="mb-6">
        <Posts :posts="userPosts"/>
        <hr class="my-4 border-t-2 border-gray-200">
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useRoute} from "vue-router";
  import type { User, Post, Invite } from "@prisma/client";

  const route = useRoute()
  const logUserId = getLoggedUserId()
  const id = route.params.id
  
  const user               = ref<User>((await $fetch(`/api/users/${id}`) as any).user)
  const userFriends        = ref<Number[]>((await $fetch(`/api/users/friends/${id}`) as any).friends)
  const userPosts          = ref<Post[]>((await $fetch(`/api/users/posts/${id}`) as any).posts)
  const userPendingInvites = ref<Invite[]>((await $fetch(`/api/invites/toUser/${id}`) as any).invites)
  const fullFriendsData = ref<User[]>([])
  
  userFriends.value.forEach(async (data) => {
    fullFriendsData.value.push(
      (await $fetch(`/api/users/${data }`) as any).user
    )
  })

      
  function navigateToChats(id:number=0){
        if(id === 0){
            navigateTo({path: `/chat/chats}`})    
        }
        navigateTo({path: `/chat/chats`, query: {id:id}})
    }
</script>

<style>

</style>
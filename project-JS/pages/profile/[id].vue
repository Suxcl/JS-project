<template>
  <div class="flex flex-row">
    <div class="basis-1/3">

      <!-- // Your info -->
      <div class="row-span-2">
        <ProfileInfo :user="user"/>
        <hr>
      </div>

      <div>
        <!-- // friendsPanel -->  
        <FriendPanel :friends="fullFriendsData"/>
        <hr>
      </div>

      
      <div v-if="logUserId === user.id">
        <div>
          <!-- // pending invites -->
          <Invites :invites="userPendingInvites"/>
          <hr>
        </div>

        <div>
          <!-- // link to chats    -->
          <Chats :userChats="userChats"/>  
          <hr>
        </div>
      </div>

    </div>
    <div class="basis-2/3">
      <div class="col-span-2">
        <!-- // your posts   -->
        <Posts :posts ="userPosts"/>
        <hr>
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
  
  const user                :User = (await $fetch(`/api/users/${id}`) as any).user
  const userFriends         :number[] = (await $fetch(`/api/users/friends/${id}`) as any).friends
  const userPosts           :Post[] = ((await $fetch(`/api/users/posts/${id}`)) as any).posts
  const userPendingInvites  :Invite[] = (await $fetch(`/api/invites/toUser/${id}`) as any).invites
  const fullFriendsData     :User[] = []
  

  userFriends.forEach(async (data) => {
    fullFriendsData.push(
      (await $fetch(`/api/users/${data }`) as any).user
    )
  })
</script>

<style>

</style>
<template>
  <div>
    <!-- // Your info -->
    <div>
      <!-- user info component -->
      <h3>info</h3>
      {{ user.id }}
      {{ user.email }}
      {{ user.name }}
      {{ user.surname }}
      <hr>
    </div>
    <!-- // friendsPanel -->
      <h3>friends</h3>
      <ul v-for="friend in fullFriendsData">
        <!-- should be a friend component -->
        <li>
          {{ friend.id }}
          {{ friend }}
        
        </li>
      </ul>
      <hr>
    <div>

    </div>
      <!-- // pending invites -->
      <h3>Invites</h3>
      <ul v-for="invite in userPendingInvites">
        {{ invite }}
      </ul>
      <hr>
    
    <div>
    </div>  
      <!-- // your posts   -->
      <h3>Posts</h3>
      <ul v-for="post in userPosts">
        <Post :post="post"/>
      </ul>
      <hr>
    <div>

    

    </div>
    <!-- // link to chats    -->
    <h3>Chats</h3>
    <ul v-for="chat in userChats"> 
      {{ chat }}
    </ul>
    <hr>
    <div>

    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useRoute} from "vue-router";
  import { ref } from "vue";
  import type { User,Friend, Post, Comment, Invite, Chat } from "@prisma/client";

  const route = useRoute()
  

  const id = route.params.id
  // user info
  const user:User = (await $fetch(`/api/users/${id}`) as any).user
  console.log(user.id)
  // friends
  const userFriends:number[] = (await $fetch(`/api/users/friends/${id}`) as any).friends
  const fullFriendsData: User[] = []
  userFriends.forEach(async (data) => {
    fullFriendsData.push(
      (await $fetch(`/api/users/${data }`) as any).user
    )
  })
  // posts
  const userPosts:Post[] = ((await $fetch(`/api/users/posts/${id}`)) as any).posts
  
  // invites
  const userPendingInvites:any[] = (await $fetch(`/api/invites/toUser/${id}`)).invites
  // chats
  const userChats:Chat[] = ((await $fetch(`/api/users/chats/${id}`))as any).chats;

  
</script>

<style>

</style>
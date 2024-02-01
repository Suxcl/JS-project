<template>
    <div>
      <h3 class="text-xl font-bold mb-4">Friends</h3>
      <ul>
        <li v-for="friend in friends" :key="friend.id" class="mb-2">
          <nuxt-link :to="getPath(friend.id)" class="block p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition duration-300 ease-in-out w-1/2">
            <Friend :friend="friend"/>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">

    import type {User} from "@prisma/client";
    import { ref } from "vue";
    const props = defineProps<({
        friends: User[];
    })>();
    
    const friends = ref(props.friends)
    function getPath(id:number) {
        return `/profile/${id}`
    }
</script>
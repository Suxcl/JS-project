<template>
    <div>
        <h3>Friends</h3>
        <ul v-for="friend in friends">
            <nuxt-link :to=getPath(friend.id)>
                <li>
                    <Friend :friend="friend"/>
                </li>
            </nuxt-link>
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
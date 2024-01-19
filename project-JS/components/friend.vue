<template>
    <div>
        <p>{{ friend.name }} {{ friend.surname }}</p>
    </div>
</template>

<script setup lang="ts">

    import type {User} from "@prisma/client";
    import { ref } from "vue";
    const props = defineProps<({
        friend: User;
    })>();
    
    const friend = ref(props.friend)
    function getPath(id:number) {
        return `/profile/${id}`
    }
</script>
<template>
    <div class="border">
        
        <p>Author</p>
        <label>{{ author.name }} {{ author.surname}}</label>
        <p>Content</p>
        <label>{{ props.comment.content }}</label>
        <p>Creation Date</p>
        <label>{{ props.comment.createdAt }}</label>
        
    </div>
</template>
<script setup lang="ts">
    import type { Comment } from '@prisma/client';
    const props = defineProps<({
        comment: Comment
    })>();

    const author = (await $fetch(`/api/users/${props.comment.authorId}`)).user    

</script>
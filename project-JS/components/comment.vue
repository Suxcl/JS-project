<template>
    <div>
        <p>Author</p>
        <p>{{ author.name }} {{ author.surname}}</p>
        <p>Content</p>
        <p>{{ props.comment.content }}</p>
        <p>Creation Date</p>
        <p>{{ props.comment.createdAt }}</p>
    </div>
</template>
<script setup lang="ts">
    import type { Comment, User } from '@prisma/client';
    const props = defineProps<({
        comment: Comment
    })>();
    console.log(props.comment)
    
    var author:User = {} as User
    if( props.comment){
        author = await $fetch(`/api/users/${props.comment.authorId}`) as any
    }
    

</script>
<template>
    <div class="border p-4 mb-4">
      <div class="mb-2">
        <p class="font-bold">Author:</p>
        <p>{{ author?.name }} {{ author?.surname }}</p>
      </div>
      <div class="mb-2">
        <p class="font-bold">Content:</p>
        <p>{{ props.comment.content }}</p>
      </div>
      <div>
        <p class="font-bold">Creation Date:</p>
        <p>{{ formatDate(props.comment.createdAt) }}</p>
      </div>
    </div>
  </template>
<script setup lang="ts">
    import type { Comment, User } from '@prisma/client';
    const props = defineProps<({
        comment: Comment
    })>();

    const author = ref<User>((await $fetch(`/api/users/${props.comment.authorId}`) as any).user )

</script>
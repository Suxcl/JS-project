


<script setup lang="ts">
    import type { Post, Comment, User} from '@prisma/client';
    import { ref } from 'vue';
    // props for component
    const props = defineProps<({
        post: Post
    })>()
    const post = ref(props.post)
    const loggedUserId = getLoggedUserId()
    const postComments:Comment[] = (await $fetch(`/api/posts/postComments/${post.value.id}`) as any).comments
    const user:User = (await $fetch(`/api/users/${post.value.authorId}`)).user
    const editPost = async (id:number) =>{
        console.log("edit", id)
        await navigateTo({
          path: `/posts/editPost-${id}`
        })
    }
    const deletePost = (id:number) =>{
        console.log("delete", id)
        $fetch('/api/posts/' + id, {
          method: 'DELETE'
        })
    }
    const likeClicked = async () =>{
        if(loggedUserId == null) {
            toastNotLoginError()
            return
        }
        console.log("like", post.value.id, loggedUserId)
        const {message, ret_val } = await $fetch('/api/posts/likeClicked', {
          method: 'POST',
          body: {
            postId: post.value.id,
            authorId: loggedUserId
          }
        })
        post.value.likes += ret_val

    }
    const dislikeClicked = async () =>{
        if(loggedUserId == null) {
            toastNotLoginError()
            return
        }
        console.log("dislike", post.value.id, loggedUserId)
        const {message, ret_val} = await $fetch('/api/posts/dislikeClicked', {
          method: 'POST',
          body: {
            postId: post.value.id,
            authorId: loggedUserId
          }
        })
        post.value.dislikes += ret_val
    }


</script>


<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <!-- <img class="h-48 w-full object-cover md:w-48" :src="post.imageUrl" :alt="post.title"> -->
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Tytuł: {{ post.title }}</div>
          <p class="mt-2 text-gray-500">{{ post.content }}</p>
          <div class="mt-4">
            <span class="text-gray-400">{{ user.name }} {{ user.surname }}</span>
            <span class="ml-2 text-gray-400">{{ formatDate(post.createdAt as Date) }}</span>
          </div>
          <div class="mt-4 flex items-center">
            <button class="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="likeClicked()">Like</button>
            <span class="text-gray-400">{{ post.likes }}</span>
            <button class="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="dislikeClicked()">Dislike</button>
            <span class="text-gray-400">{{ post.dislikes }}</span>
          </div>
          <div v-if="post.authorId === loggedUserId" class="mt-4">
            <button class="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="editPost(post.id)">Edit</button>
            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="deletePost(post.id)">Delete</button>
          </div>
          <div class="mt-4">
            <Comments :comments="postComments" :postId="post.id"/>
          </div>
        </div>
      </div>
    </div>
  </template>


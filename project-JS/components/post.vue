

<template>
    <div class="container mx-width: 600px px-4">
        <div>
            <p>Post</p>
            <p>{{ post }}</p>
            
            <p>ProductionOnly: {{ post.id }}</p>
            <p>{{ post.title }}</p>
            <p>{{ post.content }}</p>
            <p>{{ post.authorId }}</p>
            
            <p>{{ post.createdAt }}</p>
            <p>{{ post.updatedAt }}</p>
        
        </div>
    <div>
            <label>Likes</label>
            <p>{{ post.likes }}</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="likeClicked()" >
                Like
            </button>
            <label>Dislikes</label>
            <p>{{ post.dislikes }}</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="dislikeClicked()" >
                Dislike
            </button>

    </div>
        <div v-if="post.authorId === loggedUserId">
            <p>owner Buttons</p>
            <p>Post status: {{ post.private }}</p>
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="editPost(post.id)" >
                Edit
            </button>
        
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="deletePost(post.id)">
                Delete
            </button>
        </div>

    <div>
        <Comments :comments="postComments" :postId="post.id"/>
    </div>
    </div>
    <hr>
</template>


<script setup lang="ts">
    import type { Post, Comment} from '@prisma/client';
    import { ref } from 'vue';
    // props for component
    const props = defineProps<({
        post: Post
    })>()
    const post = ref(props.post)
    const loggedUserId = getLoggedUserId()
    const postComments:Comment[] = (await $fetch(`/api/posts/postComments/${post.value.id}`) as any).comments

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


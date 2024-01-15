

<template>
    <div class="container mx-width: 600px px-4">
        <div>
            <p>Post</p>
            <p>ProductionOnly: {{ props.post.id }}</p>
            <p>{{ props.post.title }}</p>
            <p>{{ props.post.content }}</p>
            <p>{{ props.post.authorId }}</p>
            
            <p>{{ props.post.createdAt }}</p>
            <p>{{ props.post.updatedAt }}</p>
        
        </div>
    <div>
            <label>Likes</label>
            <p>{{ props.post.likes }}</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="likeClicked()" >
                Like
            </button>
            <label>Dislikes</label>
            <p>{{ props.post.dislikes }}</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="dislikeClicked()" >
                Dislike
            </button>

    </div>
        <div v-if="props.post.authorId === loggedUserId">
            <p>owner Buttons</p>
            <p>Post status: {{ props.post.private }}</p>
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="editPost(post.id)" >
                Edit
            </button>
        
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="deletePost(post.id)">
                Delete
            </button>
        </div>

    <div>
        <p>Comments</p>

    </div>
    </div>
    
</template>


<script setup lang="ts">
    // props for component
    interface Post {
        id: number
        title: string
        content: string
        authorId: number
        likes: number
        dislikes: number
        createdAt: string
        updatedAt: string
        private: boolean
    }
    const props = defineProps<({
        post: Post
    })>()

    const loggedUserId = getLoggedUserId()


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
        console.log("like", props.post.id, loggedUserId)
        const {message, ret_val } = await $fetch('/api/posts/likeClicked', {
          method: 'POST',
          body: {
            postId: props.post.id,
            authorId: loggedUserId
          }
        })
        props.post.likes += ret_val

    }
    const dislikeClicked = async () =>{
        if(loggedUserId == null) {
            toastNotLoginError()
            return
        }
        console.log("dislike", props.post.id, loggedUserId)
        const {message, ret_val} = await $fetch('/api/posts/dislikeClicked', {
          method: 'POST',
          body: {
            postId: props.post.id,
            authorId: loggedUserId
          }
        })
        props.post.dislikes += ret_val
    }


</script>


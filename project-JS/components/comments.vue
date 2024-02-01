

<template>
    <div>
      <h3 class="text-lg font-bold mb-4">Comments</h3>
      <form v-if="loggedUserId !== null" class="mb-4">
        <input type="text" v-model="comment" class="border rounded-md py-2 px-3 mr-2">
        <button @click.prevent="newComment()" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Comment
        </button>
      </form>
      <ul>
        <li v-for="comment in commentsRef" :key="comment.id" class="mb-4">
          <div v-if="comment.id === editId" class="mb-2">
            <form class="mb-2">
              <input type="text" v-model="commentEdit" class="border rounded-md py-2 px-3 mr-2">
              <button @click.prevent="saveComment(comment.id)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </form>
            <button @click="cancelEdit()" class="text-blue-500 hover:text-blue-700 font-bold">
              Cancel
            </button>
          </div>
          <div v-else>
            <Comment :comment="comment" />
            <div v-if="comment.authorId === loggedUserId">
              <button @click="editComment(comment.id, comment.content)" class="text-blue-500 hover:text-blue-700 font-bold mr-2">
                Edit
              </button>
              <button @click="deleteComment(comment.id)" class="text-red-500 hover:text-red-700 font-bold">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
    import type { Comment } from '@prisma/client';
    import { ref } from 'vue';
    import { useToast } from 'vue-toastification';
    
    const props = defineProps<{
        comments: Comment[],
        postId: number
    }>()

    const comment = ref('');
    const commentEdit = ref('');
    const editId = ref(0);
    
    const toast = useToast();
    const loggedUserId = getLoggedUserId()
    const commentsRef = ref(props.comments)

    const newComment = async () => {
        if(!comment.value.trim()) {
            toast.error("Comment cannot be empty", {
                timeout: 2000
            })
            return 
        }
        const answer = await $fetch('/api/comments/comment', {
            method: 'POST',
            body: {
                "content": comment.value,
                "authorId": loggedUserId,
                "postId": props.postId
            }
            })
        
        if(answer){
            commentsRef.value.push(answer.comment)
            toast.success("Success, comment created!", {
                timeout: 2000
            })
        }else{
            toast.error("Something went wrong with creating your comment", {
                timeout: 2000
            })
        }
        comment.value = ''
    }

    const deleteComment= async (commentId: number) => {
        const answer = await $fetch(`/api/comments/${commentId}`, 
        {
            method: 'DELETE'
        })
        
        if(answer){
            toast.success("Success, comment deleted!", {
                timeout: 2000
            })
            let indexToRemove = props.comments.findIndex(comment => comment.id === commentId)
            console.log(props.comments)
            commentsRef.value.splice(indexToRemove, 1)
            console.log(props.comments)
        }else{
            toast.error("Something went wrong with deleting your comment", {
                timeout: 2000
            })
        }
    }

    const editComment = async (commentId: number, commentContent: string) => {
        editId.value = commentId
        commentEdit.value = commentContent
    }

    const cancelEdit = () => {
        editId.value = 0
        commentEdit.value = ''
    }
    const saveComment = async (commentId: number) => {
        if(!commentEdit.value.trim()) {
            toast.error("Comment cannot be empty", {
                timeout: 2000
            })
            return 
        }
        const answer = await $fetch(`/api/comments/${commentId}`, 
        {
            method: 'PATCH',
            body: {
                "content": commentEdit.value
            }
        })
        
        if(answer){
            toast.success("Success, comment edited!", {
                timeout: 2000
            })
            let indexToEdit = props.comments.findIndex(comment => comment.id === commentId)
            commentsRef.value[indexToEdit].content = commentEdit.value
        }else{
            toast.error("Something went wrong with editing your comment", {
                timeout: 2000
            })
        }
        editId.value = 0
        commentEdit.value = ''
    }

</script>
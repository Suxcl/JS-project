<template>
    <div>
        <h3>Comments</h3>
        
        <form v-if="loggedUserId!==null">
            
            <input type="text" v-model="comment">
            <button @click.prevent="newComment()">Add Comment</button>
        </form>
        
        <ul>
            <li v-for="comment in comments">
                <!-- <Comment :comment="comment"/> -->
                {{ comment }}
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
    import type { Comment } from '@prisma/client';
    import { ref } from 'vue';
    import { useToast } from 'vue-toastification';

    const comment = ref('');
    const toast = useToast();
    const loggedUserId = getLoggedUserId()
    console.log(loggedUserId, 'dwahdvwahjkgvdkhg')
    const props = defineProps<{
        comments: Comment[],
        postId: number
    }>()

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
            // props.comments.push(answer.comment)
            toast.success("Success, comment created!", {
                timeout: 2000
            })
            
            comment.value = ''
        }else{
            toast.error("Something went wrong with creating your comment", {
                timeout: 2000
            })
            comment.value = ''
        }
    }

</script>
<template>
    <h3>Posts</h3>
    <div v-if="showNewPost()">
    
        <button class="bg-transparent hover:bg-blue-500 
        text-blue-700 font-semibold hover:text-white py-2 
        px-4 border border-blue-500 hover:border-transparent rounded" 
        @click="createPost()">
            New
        </button> 
    </div>
    <ul v-for="post in posts">
        <Post :post="post"/>
    </ul>
</template>

<script setup lang="ts">    
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    import type { Post } from "@prisma/client";
    
    const props = defineProps<({
        posts: Post[]
    })>();
    
    const posts = ref(props.posts)
    const logUserId = getLoggedUserId()
    const route = useRoute()
    

    function showNewPost(){
        let routeParams = route.params
        if(routeParams.id !== undefined){
            if(logUserId) return true
            else return false
        }else if(routeParams.id === logUserId){
            return true
        }else{
            return false
        }
    }
    function createPost(){
        navigateTo({  
          path: '/posts/newPost',
          query:{
            from: 'profile'
          }
        })
    }


</script>
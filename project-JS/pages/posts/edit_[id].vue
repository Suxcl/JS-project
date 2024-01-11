<template >
    <div>post</div>
</template>
  
<script lang="ts" setup>
    var id = this.$route.params.id
    var post:any;
    const fetchPost = async () =>{
        post = await fetch('/api/posts/:id')
    }
    fetchPost()
    
</script>
  


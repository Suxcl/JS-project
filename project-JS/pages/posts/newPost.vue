<template>
    <div class="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Create New Post</h2>
      <form>
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Title</label>
          <input v-model="title" id="title" name="title" type="text" class="mt-1 block border border-gray-300 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none px-3 py-2">
        </div>
        <div class="mb-4">
          <label for="content" class="block text-gray-700">Content</label>
          <textarea v-model="content" id="content" name="content" rows="3" class="mt-1 border border-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none px-3 py-2"></textarea>
        </div>
        <div class="mb-4">
          <label for="images" class="block text-gray-700">Images</label>
          <input v-on:change="onFileChange" id="images" name="images" type="file" multiple accept="image/*" class="mt-1 block w-full">
        </div>
        <div>
          <button type="submit" @click.prevent="submitForm" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  

<script setup>
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";
    import { useRoute} from "vue-router";
    
    

    const title = ref('');
    const content = ref('');
    const images = ref([]);
    const userId = getLoggedUserId()
    const toast = useToast();
    const route = useRoute();

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('content', content.value);
    for (let i = 0; i < images.value.length; i++) {
        formData.append('images', images.value[i]);
    }
    

    const onFileChange = (event) => {
        images.value = event.target.files;
    };

    const submitForm = async () => {
        
        if (!title.value.trim()) {
            toast.error("Title is required", {
                timeout: 2000
            })
            return
        }      
        if (!content.value.trim()) {
            toast.error("Content is required", {
                timeout: 2000
            })
            return 
        }     

        const answer = await $fetch('/api/posts/posts', {
            method: 'POST',
            body: {
                "title": title.value,
                "content": content.value,
                "authorId": userId
            }
            })
        console.log("aha ",answer)
        if(answer){
            toast.success("Success, post created! Redirecting to main page", {
                timeout: 2000
            })
            if(route.query.from === "profile"){
                navigateTo({path: `/profile/${userId}`})
            }else{
                navigateTo({path: '/'})
            }
        }else{
            toast.error("Something went wrong with creating post, Redirecting to main page", {
                timeout: 2000
            })
        }
    }
    
</script>
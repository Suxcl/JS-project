<template>
    <p>Create New Post</p>
    <div>
        <form>
            <label>Title</label>
            <input v-model="title" type="text"><br>

            <label>Content</label>
            <input v-model="content" type="text"><br>

            <label>Images</label>
            <input v-on:change="onFileChange" type="file" multiple accept="image/*" ><br>

            <button type="submit" @click.prevent="submitForm">Submit</button>

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
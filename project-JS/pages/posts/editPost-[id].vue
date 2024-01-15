<template >
    <p>Edit Post</p>
    <div>
        <form>
            <label>Title</label>
            <input v-model="title" type="text"><br>

            <label>Content</label>
            <input v-model="content" type="text"><br>

            <label>Images</label>
            <input v-on:change="onFileChange" type="file" multiple accept="image/*" ><br>

            <label>Status</label>
            <select v-model="status">
                <option value=false>public</option>
                <option value=true  >private</option>
            </select>

            <button type="submit" @click.prevent="submitForm">Submit</button>

        </form>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";

    const route = useRoute();
    const post_id = parseInt(route.params.id)

    const post = (await $fetch(`/api/posts/${post_id}`)).post
    const post_urls = (await $fetch(`/api/posts/postUrls/${post_id}`)).post_urls
    console.log(post)
    const title = ref(post.title);
    const content = ref(post.content);
    const images = ref(post_urls.post_urls);
    const status = ref(post.private)

    const toast = useToast();

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('content', content.value);
    if(images.value !== null){
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images.value[i]);
        }
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
        var status_value;  
        if(status.value === 'public'){
            status_value = false
        }else{
            status_value = true
        }
        const answer = await $fetch(`/api/posts/${post_id}`, {
            method: 'PATCH',
            body: {
                title: title.value,
                content: content.value,
                private: status_value
            }
            })
        console.log("aha ",answer)
        if(answer){
            toast.success("Success, post created! Redirecting to main page", {
                timeout: 2000
            })
            navigateTo({path: '/'})
        }else{
            toast.error("Something went wrong with creating post, Redirecting to main page", {
                timeout: 2000
            })
        }
    }
    
</script>
  


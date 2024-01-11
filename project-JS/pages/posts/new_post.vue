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
    import { ref, toDisplayString } from 'vue';
    import { useToast } from "vue-toastification";

    const title = ref('');
    const content = ref('');
    const images = ref([]);
    var user;
    getLoggedUser().then(response => {
        user = response
        console.log(user.id)
    })
    
    const toast = useToast();

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
        setTimeout(() => {
            const { data, pending, error, refresh } = useFetch('/api/posts/posts', {
                method: 'POST',
                body: {
                    "title": title.value,
                    "content": content.value,
                    "authorId": user.id
                },
                onRequestError({request, options, error}){
                    console.log('onRequestErrorPost')
                    console.log(error.cause)
                    console.log(error.message)
                },
                onResponseSuccess() {
                    console.log('added new post')
                    toast.success("Success in creating new post", {
                        timeout: 2000
                    })
                    // navigateTo({path: '/'})  
                },
                onResponseError({ request, response, options }) {
                    console.log('onResponseError')
                    console.log(request)
                    console.log(response)
                    console.log(options)
                }
                })
            
        }, 1000);
    }
    
</script>
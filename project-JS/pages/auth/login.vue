<template>
  <p>Login</p>
  <div>
    <form>
        <label>Email</label>
        <input v-model="email" type="email"><br>

        <label>Password</label>
        <input v-model="password" type="password"><br>

        <button type="submit" @click.prevent="submitForm">
            {{ isLoading ? 'Loading...' : 'Submit' }}
        </button><br>

        <label>You don't have an account? Register!</label>
        <button>Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useToast } from "vue-toastification";

  const email = ref('');
  const password = ref('');
  const isLoading = ref(false);
  const toast = useToast();
  
  const submitForm = async () => {
    isLoading.value = true;

    if (!email.value.trim() || !password.value.trim()) {
      isLoading.value = false;
      return;
    } 
    const { data, pending, error, refresh } = await useFetch('/api/users/getUserByEmail', {
        method: 'POST',
        body: {
            email: email.value
        },
      })
    
    isLoading.value = false;
    if(data.value?.user?.email === email.value){
      toast.success("Success, you logged in! Redirecting to main page", {
        timeout: 2000
      });
      loginUser(email.value, data.value.user.id)
      window.location.reload()
      navigateTo({path: '/'})
        
    }else{
      toast.error("We could not find user with these credentials", {
        timeout: 2000
      });
      email.value = ''
      password.value = ''  
    }       
  };
  
</script>

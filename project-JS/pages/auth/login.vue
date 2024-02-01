<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <div class="border rounded-lg shadow-md p-6">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="email" class="block mb-1">Email</label>
          <input v-model="email" id="email" type="email" class="w-full border border-gray-300 rounded-md p-2">
        </div>
        <div>
          <label for="password" class="block mb-1">Password</label>
          <input v-model="password" id="password" password type="password" class="w-full border border-gray-300 rounded-md p-2">
        </div>
        <div>
          <button type="submit" :disabled="isLoading" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" :class="{ 'opacity-50 cursor-not-allowed': isLoading }">
            {{ isLoading ? 'Loading...' : 'Submit' }}
          </button>
          <button class="ml-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" @click="navigateToRegister()">Sign Up</button>
      </div>
      </form>
    </div>
    <!-- <div class="mt-4">
      <label class="block mb-1">You don't have an account? Register!</label>
      <button class="text-blue-500 hover:text-blue-700 font-bold" @click="navigateToRegister()">Sign Up</button>
    </div> -->
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
      navigateTo({path: '/'})
      setTimeout(()=>{window.location.reload()}, 1000)
      
        
    }else{
      toast.error("We could not find user with these credentials", {
        timeout: 2000
      });
      email.value = ''
      password.value = ''  
    }       
  }

  function navigateToRegister(){
    navigateTo({path: '/auth/register'})
  }
  
</script>

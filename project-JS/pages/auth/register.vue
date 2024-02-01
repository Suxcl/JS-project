<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <div class="border rounded-lg shadow-md p-6">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="email" class="block mb-1">Email</label>
          <input v-model="email" id="email" type="email" class="w-full border border-gray-300 rounded-md p-2">
        </div>
        <div>
          <label for="password1" class="block mb-1">Password</label>
          <input v-model="password1" id="password1" type="password" password class="w-full border border-gray-300 rounded-md p-2">
        </div>
        <div>
          <label for="password2" class="block mb-1">Repeat Password</label>
          <input v-model="password2" id="password2" type="password" password class="w-full border border-gray-300 rounded-md p-2 ">
        </div>
        <!-- <div class="flex items-center">
          <input v-model="showPassword" id="showPassword" type="checkbox" class="mr-2">
          <label for="showPassword">Show Password</label>
        </div> -->
        <div>
          <label for="name" class="block mb-1">Name</label>
          <input v-model="name" id="name" type="text" class="w-full border-gray-300 border rounded-md p-2">
        </div>
        <div>
          <label for="surname" class="block mb-1">Surname</label>
          <input v-model="surname" id="surname" type="text" class="w-full border border-gray-300 rounded-md p-2">
        </div>
        <div>
          <input v-model="consent" id="consent" type="checkbox" class="mr-2">
          <label for="consent">I agree to terms and conditions</label>
        </div>
        <div>
        <button type="submit" :disabled="isLoading" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" :class="{ 'opacity-50 cursor-not-allowed': isLoading }">
          {{ isLoading ? 'Loading...' : 'Submit' }}
        </button>
        <button type="button"  class="ml-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" @click="navigateTo({path:'/auth/login'})" >
          Login Page
        </button>
        
      </div>
      </form>
    </div>
    <div class="mt-4">
      <RegisterFeedback :formFeedback="formFeedback" />
    </div>
    
  </div>
</template>




<script lang="ts" setup>
import { ref } from 'vue';
import { useToast } from "vue-toastification";

type FormFeedbackType = 
 'incomplete' 
| 'consent' 
| 'invalid_email' 
| 'success' 
| 'bad password' 
| "no_match_password" 
| 'userExists'
| null;

const email = ref('');
const password1 = ref('');
const password2 = ref('');
const name = ref('');
const surname = ref('');
const consent = ref(false);
const isLoading = ref(false);
const showPassword = ref(false)
const formFeedback: Ref<FormFeedbackType> = ref(null);
const success = ref(true);
const toast = useToast();


const submitForm = async () => {
  isLoading.value = true;
  formFeedback.value = null;
  const regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const regex_password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;

  if (!email.value.trim() || !password1.value.trim() || !password2.value.trim() || !name.value.trim() || !surname.value.trim()) {
    formFeedback.value = 'incomplete';
    isLoading.value = false;
    return;
  } 
  if(email.value && !regex_email.test(email.value)) {
    formFeedback.value = 'invalid_email';
    success.value = false;
    isLoading.value = false;
    return;
  }
  
  if (password1.value != password2.value) {
    
    formFeedback.value = 'no_match_password';
    success.value = false;
    isLoading.value = false;
    return;
  }
  if (password1.value && !regex_password.test(password1.value)){
    formFeedback.value = 'bad password';
    success.value = false;
    isLoading.value = false;
    return;
  }
  if (!consent.value) {
    formFeedback.value = 'consent';
    success.value = false;
    isLoading.value = false;
    return;
  }
  const find_user = await $fetch('/api/users/getUserByEmail', 
    {
      method: 'POST',
      body: {email: email.value} 
    }).then(
      res => {
        if(res?.user?.email === email.value){
          formFeedback.value = 'userExists';
          success.value = false;
          isLoading.value = false;
          return;      
        }
      }
    ).catch(err => console.log(err));
  const answer = await $fetch('/api/users/users', {
    method: 'POST',
    body: {
      email: email.value,
      password: password1.value,
      name: name.value,
      surname: surname.value
    }
  }).then(
    res => {
      success.value = true;
      formFeedback.value = 'success';
      isLoading.value = false;
      toast.success("Success, you created your own account, redirecting to main page", {
          timeout: 2000
      });    
      loginUser(res.createUser.email , res.createUser.id)
      window.location.reload()
      navigateTo({path: '/'})
    }
  ).catch(err => {
    success.value = false;
    toast.error("Something went wrong with registration \n Database issue", {
          timeout: 2000
      });    
  })
  
}
</script>
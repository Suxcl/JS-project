<template>
  <p>register</p>
  <div>
      <form>
        <label>Email</label>
        <input v-model="email" type="email"><br>

        <label>Password</label>
        <input v-model="password1" type="password1"><br>
        <button>Show Password</button><br>

        <label>Repeat Password</label>
        <input v-model="password2" type="password2"><br>

        <label>Name</label>
        <input v-model="name" type="name"><br>

        <label>Surname</label>
        <input v-model="surname" type="surname"><br>

        <label>
            <input 
                type="checkbox"
                v-model="consent"
                id="updates"
            >
            I agree to terms and conditions
        </label><br>

        <button type="submit" @click.prevent="submitForm">
            {{ isLoading ? 'Loading...' : 'Submit' }}
        </button><br>


        <registerFeedback :formFeedback="formFeedback!" /><br>

        <label>Already have account?</label>
        <button>Sign In</button>
      </form>
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
  const find_user = await getUserByEmail(email.value)
  if(find_user){
    formFeedback.value = 'userExists';
    success.value = false;
    isLoading.value = false;
    return;
  }
  const answer = await $fetch('/api/users/users', {
    method: 'POST',
    body: {
      email: email.value,
      password: password1.value,
      name: name.value,
      surname: surname.value
    }
  })
  success.value = true;
  formFeedback.value = 'success';
  isLoading.value = false;
  toast.success("Success, you created your own account, redirecting to main page", {
      timeout: 2000
  });
}
</script>
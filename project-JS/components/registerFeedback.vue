<script lang="ts" setup>
const props = defineProps({
  formFeedback: String,
});
</script>

<template>
  <div>
    <div v-if="formFeedback === 'error'" class="bg-red-100 text-red-700 p-4 rounded-md mb-4">
      There was an error processing your request.
    </div>

    <div v-else-if="formFeedback === 'incomplete'" class="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
      Please complete all required fields.
    </div>

    <div v-else-if="formFeedback === 'invalid_email'" class="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
      Please enter a valid email address.
    </div>

    <div v-else-if="formFeedback === 'bad password'" class="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
      Password needs to be 6-20 digits long, contain one number, one uppercase letter, and one special character.
    </div>

    <div v-else-if="formFeedback === 'no_match_password'" class="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
      Passwords did not match.
    </div>

    <div v-else-if="formFeedback === 'consent'" class="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
      Please agree to terms and conditions.
    </div>

    <div v-else-if="formFeedback === 'userExists'" class="bg-red-100 text-red-700 p-4 rounded-md mb-4">
      User with this email already is registered.
    </div>
  </div>
</template>

<style scoped></style>
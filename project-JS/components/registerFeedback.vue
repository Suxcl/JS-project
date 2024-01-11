<script lang="ts" setup>
const props = defineProps({
  formFeedback: String,
});
</script>

<template>
  <div
    v-if="formFeedback === 'error'"
  >
    There was an error processing your request.
  </div>

  <div
    v-else-if="formFeedback === 'incomplete'"

  >
    Please complete all required fields.
  </div>

  <div
    v-else-if="formFeedback === 'invalid_email'"

  >
    Please enter a valid email address.
  </div>



  <div
    v-else-if="formFeedback === 'bad password'"

  >
    Password needs to be 6-20 digits long, contain one number and what big letter and special character.
  </div>

  <div
    v-else-if="formFeedback === 'no_match_password'"

  >
    Passwords did not match.
  </div>

  <div
    v-else-if="formFeedback === 'consent'"

  >
    Please agree to terms and conditions.
  </div>
  <div v-else-if="formFeedback === 'userExists'" >
    User with this email already is registered
  </div>
  
  
</template>

<style scoped></style>
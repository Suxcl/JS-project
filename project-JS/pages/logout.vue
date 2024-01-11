<template>
    <div class=" bg-violet-950">
        <p>Logout</p>
    </div>
  </template>
  
  <script lang="ts" setup>
    await logoutUser()
    navigateTo({path: '/'})
  </script>
  
  <style scoped>
  
  </style>
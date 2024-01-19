<template>
  <div class="flex flex-col h-screen">
      <!-- Navbar -->
      <header class="shadow-sm bg-green-500">
        <Navbar/>
      </header>
      <!-- slot and sidebar -->
      <div class="flex flex-row overflow-y-auto gap-4">

        <div class="w-5/6 border p-4" >
          <slot />
        </div>

        <div v-if="route.query.id!=='id'" class="h-screen w-1/6 bg-gray-800 text-white right-0 fixed overflow p-4">
          <Sidebar/>
        </div>

      </div>
  </div>
  
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  const route = useRoute()
</script>

<style scoped>

</style>
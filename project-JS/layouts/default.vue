<template>
  <div class=" bg-violet-950">
    <header class="shadow-sm bg-green-500">
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <li>
            <nuxt-link to="/">
              <Icon name="material-symbols:home-rounded" color="" />
            </nuxt-link> |
          </li>

          <li>
            <nuxt-link to="/login">
              <Icon name="ic:baseline-log-in" />
            </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/register">
              <Icon name="material-symbols:assignment-add-outline-rounded" />
            </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/profile">
              <Icon name="material-symbols:account-circle-full" />
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
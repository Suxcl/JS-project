<template>
  <nav class="container mx-auto p-4 flex justify-between">
          <ul class="flex gap-4">
            <!-- Home -->
            <li>
              <nuxt-link to="/">
                Home <Icon name="material-symbols:home-rounded" color="" />
              </nuxt-link> |
            </li>
            <!-- Login -->
            <li v-if="!loggedUser">
              <nuxt-link to="/auth/login">
                Login <Icon name="ic:baseline-log-in" />
              </nuxt-link>
            </li>
            <!-- Register -->    
            <li v-if="!loggedUser">
              <nuxt-link to="/auth/register">
                Register <Icon name="material-symbols:assignment-add-outline-rounded" />
              </nuxt-link>
            </li>
            <!-- Logout -->
            <li v-if="loggedUser" >
              <nuxt-link to="/" @click="logOut()">
                Logout <Icon name="material-symbols:assignment-add-outline-rounded" />
              </nuxt-link>
            </li>        
            <!-- Profile -->
            <li v-if="loggedUser" >
              <nuxt-link @click="goToProfile()">
                Profile <Icon name="material-symbols:account-circle-full" />
              </nuxt-link>
            </li>
          </ul>
        </nav>
</template>

<script lang="ts" setup>
  
  
  var logUserId  = null
  const loggedUser = ref<Boolean>(false)
  refreshNavbar()

  

  async function logOut(){
    logoutUser()
    navigateTo({path: '/'})
  }

  function refreshNavbar(){    
    if (getLoggedUserId() !== null){
      loggedUser.value = isSomeoneLogged()
    }
  }
  function goToProfile(){
    let id = getLoggedUserId()
    navigateTo({path: `/profile/${id}`})
  }

</script>

<style>

</style>
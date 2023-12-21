<template>
    <div>
        <div>
            <p>{{}}</p>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
       const appConfig = useAppConfig()
       console.log(appConfig.nuxtIcon)
  </script>
  
  <style>
  
  </style>


<!-- <script setup>
    import {getUsers} from '~/utils/data_fetching';
    
    export default {
        data() {
          return {
            UserList: []
          }  
        },
        methods:{
            getData(){

            },
        }
    }
</script> -->

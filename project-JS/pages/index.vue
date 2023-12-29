<template>
    <div>
        <div>
            <p>{{}}</p>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>

      // import db from '~/plugins/db.js'

      // async function getUsers() {
      //   return new Promise((resolve, reject) => {
      //     db.all('SELECT * FROM users', (error, rows) => {
      //       if (error) {
      //         reject(error)
      //       } else {
      //         resolve(rows)
      //       }
      //     })
      //   })
      // }


      const appConfig = useAppConfig()
      console.log(appConfig.nuxtIcon)
  </script>
  



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

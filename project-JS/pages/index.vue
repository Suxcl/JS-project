<template>
    <div>
        <div>
            <p>{{usersList[0]}}</p>
            <p>{{usersList[0].id}}</p>
            <p>{{usersList[0].name}}</p>
            <p>{{usersList[0].surname}}</p>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>

      var usersList: any[] = []
      
      const usersData = await $fetch('/api/users/users')
      usersData.users.forEach(data => {
        usersList.push(data)
        
      })

      const appConfig = useAppConfig()
      console.log(appConfig.nuxtIcon)
  </script>
  


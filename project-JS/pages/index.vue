<template >
    <div class="flex flex-row">
      <div class="basis-1/6">
        <p>Users</p>
        <div>
          <ul v-for="user in usersList">
            <NuxtLink :to="`/profile/${user.id}`"><p>{{ user }}</p></NuxtLink>
            
          </ul>
        </div>
      </div>
      <div class="basis-4/6">
        <p>Posts</p>
        <div v-if="logUserId!==null">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="newPost()" >
              New
          </button>
        </div>
        <div>
          <ul v-for="post in postList.reverse()">        
            <Post :post="post"/>
            <br><hr><br>
          </ul>
        </div>
      </div>
      <div class="basis-1/6">
        <p>Invites</p>
        <div>
          <ul v-for="inv in invList">
            <p>{{ inv }}</p>
          </ul>
        </div>
        <p>Comments</p>
        <p>Chats</p>
      </div>
        
        
    
    </div>
    
  </template>
  
  <script lang="ts" setup>
  
      
      const logUserId = getLoggedUserId()

      var usersList: any[] = []
      var postList:any[] = [] 
      var invList: any[] = []
      var commentList: any[] = []
      var chatsList: any[] = []

      
      // users
      
      // const usersData = await $fetch('/api/users/users')
      usersList = (await $fetch('/api/users/users')).users
      


      // === test asyncData ===
      // normal fetch
      // const postData = await $fetch('/api/posts/posts')
      // postData.posts.forEach(data => {
      //   postList.push(data)
      // })
      // async fetch
      const {data: posts} = await useAsyncData(
        'posts', () => $fetch('/api/posts/posts'),
          {
            watch: [postList]        
          }
      )
      posts.value?.posts.forEach((data)=>{
        postList.push(data)
      })



      // const invData = await $fetch('/api/invites/invite')
      // const commentData = await $fetch('/api/comments/comments')
      // const chatsData = await $fetch('/api/chats/chats')
      
  

      async function newPost(){
        navigateTo({  
          path: '/posts/newPost'
        })
      }
      


      const appConfig = useAppConfig()
      console.log(appConfig.nuxtIcon)
  </script>
  


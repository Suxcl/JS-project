<template>
  <div class="flex flex-row">
    <!-- Sidebar -->
    <div class="w-1/6  p-4">
      <p class="font-semibold text-lg mb-4">Users</p>
      <ul>
        <li v-for="user in usersList" :key="user.id" class="mb-2">
        <NuxtLink :to="`/profile/${user.id}`" class="block w-full p-4 bg-white rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-center">{{}} {{ user.name }} {{ user.surname }}</NuxtLink>
      </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-5/6 p-4">
      <p class="font-semibold text-lg mb-4">Posts</p>
      <div v-if="logUserId !== null" class="mb-4">
        <button @click="newPost" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          New Post
        </button>
      </div>
      <div>
        <ul>
          <li v-for="post in postList.reverse()" :key="post.id" class="mb-4">
            <Post :post="post"/>
            <hr class="my-4 border-t-2 border-gray-200">
          </li>
        </ul>
      </div>
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
  


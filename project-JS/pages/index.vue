<template >
    <div name="bieluch">
        <p>Users</p>
        <div>
          <ul v-for="user in usersList">
            <p>{{ user }}</p>
          </ul>
            
        </div>
        <p>Posts</p>
        <div v-if="isLogged">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="newPost()" >
              New
          </button>
        </div>
        <div>
          <ul v-for="post in postList">
            <p>{{ post }}</p>
            <!-- <div v-if="isLogged">
              <p>pokazuje że ktoś jest zalogowany</p>
            </div> -->
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="editPost(post.id)" >
              Edit
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="deletePost(post.id)">
              Delete
            </button>
          
          </ul>
            
        </div>
        <p>Invites</p>
        <div>
          <ul v-for="inv in invList">
            <p>{{ inv }}</p>
          </ul>
            
        </div>
        <p>Comments</p>
        <p>Chats</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  
      
      const auth_cookie = useCookie('auth', { watch: true })
      var loggedUser: any
      var isLogged = false
      
      

      if (auth_cookie && auth_cookie.value !==null){
        loggedUser = getLoggedUser()
        isLogged = isSomeoneLogged()
      }



      var usersList: any[] = []
      var postList: any[] = []
      var invList: any[] = []
      var commentList: any[] = []
      var chatsList: any[] = []

      
      
      
      const usersData = await $fetch('/api/users/users')
      const postData = await $fetch('/api/posts/posts')
      // const invData = await $fetch('/api/invites/invite')
      // const commentData = await $fetch('/api/comments/comments')
      // const chatsData = await $fetch('/api/chats/chats')
      usersData.users.forEach(data => {
        usersList.push(data)
      })
      postData.posts.forEach(data => {
        postList.push(data)
      })
      // invData.users.forEach(data => {
      //   invList.push(data)
      // })
      // commentData.users.forEach(data => {
      //   commentList.push(data)
      // })
      // chatsData.users.forEach(data => {
      //   chatsList.push(data)
      // })
      
      // posts

      async function newPost(){
        navigateTo({
          path: '/posts/new_post'
        })
      }
      async function editPost(id:number){
        console.log("edit", id)
        navigateTo({
          path: '/posts/edit_' + id
        })
      }
      async function deletePost(id:number){
        console.log("delete", id)
        await $fetch('/api/posts/' + id, {
          method: 'DELETE'
        })
      }


      const appConfig = useAppConfig()
      console.log(appConfig.nuxtIcon)
  </script>
  


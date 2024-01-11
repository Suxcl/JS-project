export const getUserByEmail = async (email:string|null|undefined) =>{
    const user = await useFetch('/api/users/getUserByEmail.post.', {
        method: 'POST',
        body: {
            email: email
        }
    })
    if(user.data.value?.user){
        return user.data.value.user;
    }else{
        console.log('No user found in database')
        return null;
    }
}


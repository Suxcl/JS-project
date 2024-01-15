export const loginUser = (email:string, id:number) =>{
    const auth_cookie = useCookie('auth')

    auth_cookie.value = JSON.stringify(
        {
            email: email,
            id: id
        }
    )    
    console.log('Storing log user in cookie')
    console.log('Cookie', auth_cookie.value)

}


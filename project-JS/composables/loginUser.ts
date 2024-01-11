export const loginUser = (email:string) =>{
    const auth_cookie = useCookie('auth')
    auth_cookie.value = email   
    console.log('Storing email in cookie')
    console.log('Email', email)
    console.log('Cookie Email', auth_cookie.value)
}


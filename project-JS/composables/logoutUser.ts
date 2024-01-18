export const logoutUser = () =>{
    const auth_cookie = useCookie('auth')
    auth_cookie.value = ''
    console.log('Logging out user')
    console.log('Cookie', auth_cookie.value)
}


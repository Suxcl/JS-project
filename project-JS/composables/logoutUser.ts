export const logoutUser = () =>{
    const auth_cookie = useCookie('auth')
    auth_cookie.value = ''
}

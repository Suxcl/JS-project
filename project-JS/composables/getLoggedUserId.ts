export const getLoggedUserId = () =>{
    const auth_cookie = useCookie('auth')
    // console.log('Logged user cookie', auth_cookie.value.email)
    // const auth_cookie_val = JSON.parse(auth_cookie.value as string)
    if(auth_cookie.value === null || auth_cookie.value === undefined || auth_cookie.value === ''){
        // console.log('No one is logged cant read value')
        return null
    }else{
        // console.log('Returning loggedUser Id, ', auth_cookie.value.id)
        return parseInt(auth_cookie.value.id);
    }
}


export const isSomeoneLogged = () =>{
    const auth_cookie = useCookie('auth')
    console.log('Logged user cookie iSL', auth_cookie.value)
    if(auth_cookie.value === '' || auth_cookie.value === null || auth_cookie.value === undefined){
        // console.log('No one is logged retuning false')
        return false
    }else{
        // console.log('Found user retuning true')
        return true
    }
}


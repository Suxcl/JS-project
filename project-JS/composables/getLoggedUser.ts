import { getUserByEmail } from "./getUserByEmail"

// returns logged user
export const getLoggedUser = () => {    
    const auth_cookie = useCookie('auth')
    console.log('Logged user cookie', auth_cookie.value)
    
    if(auth_cookie.value === null || auth_cookie.value === undefined || auth_cookie.value === ''){
        console.log('No one is logged cant read value')
        return null
    }else{
        const user = getUserByEmail(auth_cookie.value)
        console.log('User', user)
        return user
    }
    
}


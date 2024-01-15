import {inject} from 'vue'
import {CryptoJS} from 'crypto-js'
export const hash = (pass:string) =>{
    const cryptojs = inject('cryptojs') as typeof CryptoJS

    return cryptojs.SHA3(pass, {outputLength: 256});
}


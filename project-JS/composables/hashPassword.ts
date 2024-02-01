import {inject} from 'vue'

import bcrypt from 'bcrypt'



// export const hash = (pass:string) =>{
//     const cryptojs = inject('cryptojs') as typeof CryptoJS

//     return cryptojs.SHA3(pass, {outputLength: 256});
// }

// Function to hash a password

export const hashPassword = async function hashPassword(password: string) {
    try {
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  }
  

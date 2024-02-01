import bcrypt from 'bcrypt'

export const CompareHash = async(password:string, hashedPassword:string) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
}



// export async function comparePassword() : Promise<boolean>{

// }

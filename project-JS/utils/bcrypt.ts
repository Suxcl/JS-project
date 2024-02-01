import bcrypt from 'bcrypt'

// Function to hash a password
export async function hashPassword(password:string) {
    try {
      const saltRounds = 10; // You can adjust this value as needed
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  }
  
  // Function to compare a password with a hash
  export async function comparePassword(password:string, hashedPassword:string) {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw new Error('Error comparing passwords');
    }
  }
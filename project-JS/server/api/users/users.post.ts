import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient



export default defineEventHandler( async (event) => {
    // read body of event e.g. {name: 'pifpaf'} 
    const body = await readBody(event)
    // create user from PrismaInput
    let user: Prisma.UserCreateInput
    user = {
        email: body.email,
        password: body.password,
        name: body.name,
        surname: body.surname
    }
    // send request to db to create a user
    const createUser = await prisma.user.create({ data:user })

    // to see the event and user values probably temporary but i know this will stay here
    return {
        event: event,
        user: user,
        createUser: createUser
      }
  })
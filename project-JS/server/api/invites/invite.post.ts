import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    // for invites
    //  0 - pending
    //  1 - accepted
    //  2 - rejected
    //     
    const createInvite = await prisma.invite.create({ 
        data: {
            user_from_id: body.user_from_id,
            user_to_id: body.user_to_id,
            status: 0
        }
    })

    return {
        invite:createInvite
      }
  })
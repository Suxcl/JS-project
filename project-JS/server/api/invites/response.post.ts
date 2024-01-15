import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    // for invites
    //  0 - pending
    //  1 - accepted
    //  2 - rejected
    //     
    
    const responseInvite = await prisma.invite.update({ 
        where: {
            id: body.id
        },
        data: {
            status: body.status
        }
    })

    return {
        invite:responseInvite
      }
  })
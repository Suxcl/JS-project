import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    // for invites
    //  0 - pending
    //  1 - accepted
    //  2 - rejected
    //     
    
    const InvitesToUser = await prisma.invite.findMany({ 
        where: {
            user_to_id: body.user_to_id,
            status: 0
        }
    })

    return {
        invites:InvitesToUser
      }
  })
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {   
    const body = await readBody(event) 
    const ChatUser = await prisma.chatUser.create({
        data: {
            chatId: body.chatId,
            chatUser: body.chatUser
        }
    })
    return {
        newMember: ChatUser
      }
  })
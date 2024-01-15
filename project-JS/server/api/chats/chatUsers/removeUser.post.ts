import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {   
    const body = await readBody(event) 
    const ChatUser = await prisma.chatUser.delete({
        where: {
            chatId_chatUser: {
                chatId: body.chatId,
                chatUser: body.chatUser
            }
        }
    })
    return {
        message: 'User removed from chat',
        chatuser: ChatUser
      }
  })
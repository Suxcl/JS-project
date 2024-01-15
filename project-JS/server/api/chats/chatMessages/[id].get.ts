import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    // confusing naming but id in params is for chat 
    const chatId = parseInt(event.context.params.id) as number
    let chatMessages = []

    if (!Number.isInteger(chatId)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        chatMessages = await prisma.chatMessage.findMany({
            where: {
                chatId: chatId
            }
        })
        
    }
    return {
        chatMessages: chatMessages
    }
  })
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    // confusing naming but id in params is for chat 
    const id = parseInt(event.context.params.id) as number
    let chats = []

    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        chats = await prisma.chatUser.findMany({
            where: {
                chatUser: id
            },
            select: {
                chatId: true
            }
        })
        
    }
    return {
        chats: chats
    }
  })
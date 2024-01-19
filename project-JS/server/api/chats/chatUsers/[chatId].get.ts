import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const chatId = parseInt(event.context.params.chatId) as number
    let users = []

    if (!Number.isInteger(chatId)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'HUH ID should be an integer',
        })
    }else{
        users = await prisma.chatUser.findMany({
            where: {
                chatId: chatId
            }
        })
        
    }
    return {
        users: users.map((data) => data.chatUser)
    }
  })
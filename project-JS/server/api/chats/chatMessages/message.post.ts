import { PrismaClient, Prisma } from "@prisma/client"
import { getLoggedUserId } from "~/composables/getLoggedUserId"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {   
    const body = await readBody(event) 
    const chatMessage = await prisma.chatMessage.create({
        data: {
            content: body.content,
            authorId: body.authorId,
            chatId: body.chatId
        }
    })
    return {
        chatMessage: chatMessage
      }
  })
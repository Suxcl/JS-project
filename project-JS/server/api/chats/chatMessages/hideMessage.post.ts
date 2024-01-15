import { PrismaClient, Prisma } from "@prisma/client"
import { getLoggedUserId } from "~/composables/getLoggedUserId"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {   
    const body = await readBody(event) 
    const chatMessage = await prisma.chatMessage.update({
        where: {
            id: body.chatMessageId
        },
        data: {
            content: body.content,
        }
    })
    return {
        chatMessage: chatMessage
      }
  })
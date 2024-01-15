import { PrismaClient, Prisma } from "@prisma/client"
import { getLoggedUserId } from "~/composables/getLoggedUserId"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {   
    const id = parseInt(event.context.params.id) as number
    const body = await readBody(event) 
    const chatMessage = await prisma.chatMessage.update({
        where: {
            id: id
        },
        data: {
            content: body.content,
        }
    })
    return {
        chatMessage: chatMessage
      }
  })
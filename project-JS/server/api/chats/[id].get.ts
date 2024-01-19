import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const id = parseInt(event.context.params.id) as number
    
    const data = await prisma.chat.findUnique({ 
        where: {
            id: id 
        }
    })
    return {
        chat: data
      }
  })
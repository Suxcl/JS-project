import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {    
    const Chats = await prisma.chatUser.findMany()
    return {
        chats: Chats
      }
  })
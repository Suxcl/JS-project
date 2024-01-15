import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.userId) as number
    
    const friends = await prisma.friend.findMany({
        where: {
            user1Id: id
        }
    })
    
    return {
        friends: friends
    }

    })
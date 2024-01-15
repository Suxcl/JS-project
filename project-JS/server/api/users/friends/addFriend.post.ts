import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    // post body
    // user1Id: number
    // user2Id: number
    const body = await readBody(event)
    
    const friend_uno = await prisma.friend.create({
        data: {
            user1Id: body.user1Id,
            user2Id: body.user2Id
        }
    })
    const friend_dos = await prisma.friend.create({
        data: {
            user1Id: body.user2Id,
            user2Id: body.user1Id
        }
    })

    
    return {
        friends: {friend_uno, friend_dos}
    }

    })
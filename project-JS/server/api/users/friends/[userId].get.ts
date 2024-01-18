import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.userId) as number
    
    const friends = await prisma.friend.findMany({
        where: {
            user1Id: id
        },
        select: {
            user2Id: true
        }
    })
    var friendsReturn: unknown[] = []
    friends.forEach(async (friend) => {
        friendsReturn.push(await $fetch(`api/users/${friend.user2Id}`))
    })
    
    
    return {
        friends: friends.map((data) => data.user2Id)
    }

    })
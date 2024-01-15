import { PrismaClient, Prisma } from "@prisma/client"
import { getLoggedUserId } from "~/composables/getLoggedUserId"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    // post body
    // userId: number
    const id_for_check = (await readBody(event)).userId
    const loggedId = getLoggedUserId()
    if(loggedId === null) return false 
    const friends = await prisma.friend.findUnique({
        where: {
            user1Id_user2Id: {
                user1Id: id_for_check,
                user2Id: loggedId
            }
        }
    })
    if(friends === null) return false
    return true

    })
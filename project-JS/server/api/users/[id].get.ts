import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    
    let user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
    
    return {
        user: user
    }

    })
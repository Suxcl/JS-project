import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    let user = null
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }
    return {
        user: user
    }

    })
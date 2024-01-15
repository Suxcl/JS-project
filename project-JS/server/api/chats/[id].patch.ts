import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    const body = await readBody(event)
    let post = null
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Chat Patch ID should be an integer',
        })
    }else{
        post = await prisma.chat.update({
            where: {
                id: id
            },
            data: {
                name: body.name
            }
        })
    }
    return {
        edited_chat: post
    }

    })
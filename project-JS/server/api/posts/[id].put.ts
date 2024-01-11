import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    const body = await readBody(event)
    let post = null
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        post = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
    }
    return {
        edited_post: post
    }

    })
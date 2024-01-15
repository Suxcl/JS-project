import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    const body = await readBody(event)
    let comment = null
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Comment Patch ID should be an integer',
        })
    }else{
        comment = await prisma.comment.update({
            where: {
                id: id
            },
            data: {
                content: body.content
            }
        })
    }
    return {
        edited_comment: comment
    }
    })
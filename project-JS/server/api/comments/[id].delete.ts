import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    console.log("nigger")
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        await prisma.comment.delete({
            where: {
                id: id
            }
        })
        await prisma.commentUrl.deleteMany({
            where: {
                commentId: id
            }
        })
    }
    return `Comment and urls with id ${id} deleted successfully`

    })
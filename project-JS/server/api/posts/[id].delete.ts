import { PrismaClient, Prisma } from "@prisma/client"
import { idShouldBeInteger } from "~/composables/errors/idShouldBeInteger"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    
    if (!Number.isInteger(id)) {
        idShouldBeInteger()
    }else{
        await prisma.post.delete({
            where: {
                id: id
            }
        })
        await prisma.postUrl.deleteMany({
            where: {
                postId: id
            }
        })
    }
    return `Post with id ${id} deleted successfully with urls`

    })
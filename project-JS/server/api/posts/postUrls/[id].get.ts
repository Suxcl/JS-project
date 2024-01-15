import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    let post_urls = null
    let urls:string[] = []
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: ' ID should be an integer',
        })
    }else{
        post_urls = await prisma.postUrl.findMany({
            where: {
                postId: id
            }
        })
        post_urls.forEach(data => {
            urls.push(data.url)
        })
    }
    return {
        post_urls: urls
    }

    })
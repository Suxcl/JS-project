import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const postId = parseInt(event.context.params.id) as number
    let comments: any[] = []
    let commentsUrls: any[] = []

    async function findCommentsUrls(commentId:number){
        return await prisma.commentUrl.findMany({
            where: {
                commentId: commentId
            }
        })
    }

    if (!Number.isInteger(postId)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'UserGet ID should be an integer',
        })
    }else{
        comments = await prisma.comment.findMany({
            where: {
                postId: postId
            }
        })
        comments.forEach(data => {
            commentsUrls.push(findCommentsUrls(data.id))
        })
    }
    return {
        comments: comments,
        commentsUrl: commentsUrls
    }
  })
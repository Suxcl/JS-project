import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    const createComment = await prisma.comment.create({ 
        data: {
            "content": body.content,
            "authorId": body.authorId,
            "postId": body.postId
        }
    })

    if(body.url){
        let tmp = JSON.parse(body.url)
        tmp.forEach(async (elem:string)=>{
            await prisma.commentUrl.create({
                data: {
                    url: elem,
                    commentId: createComment.id
                }
            })
        })
    }

    return {
        comment: createComment,
      }
  })
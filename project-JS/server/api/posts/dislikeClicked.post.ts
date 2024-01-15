import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    const authorId = body.authorId
    const postId = body.postId
    var message = 'like added'
    var ret_val = 0
    const like = await prisma.userLikePost.findUnique({
        where: {
            postId_userId: {
                postId: postId,
                userId: authorId
            }
        }
    })
    const dislike = await prisma.userDislikePost.findUnique({
        where: {
            postId_userId: {
                postId: postId,
                userId: authorId
            }
        }
    })

    if(like === undefined || like === null ){
        if(dislike === undefined || dislike === null){
            await prisma.userDislikePost.create({
                data: {
                    postId: postId,
                    userId: authorId
                }
            })
            await prisma.post.update({
                where: {
                    id: postId
                },
                data: {
                    dislikes: {
                        increment: 1
                    }
                }
            })
            message = 'dislike added'
            ret_val = 1
        }else{
            await prisma.userDislikePost.delete({
                where: {
                    postId_userId: {
                        postId: postId,
                        userId: authorId
                    }
                }
            })
            await prisma.post.update({
                where: {
                    id: postId
                },
                data: {
                    dislikes: {
                        decrement: 1
                    }
                }
            })
            message = 'dislike removed'
            ret_val = -1
        }
        
    }else{
        message = 'cant like or dislike at the same time'
    } 
    return {
        message: message,
        ret_val: ret_val
      }
  })
  
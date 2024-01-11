import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    let post: Prisma.PostUncheckedCreateInput
    let postUrl: Prisma.PostUrlUncheckedCreateInput
    post = {
        title: body.title,
        content: body.content,
        authorId: body.authorId
    }
    // send request to db to create a user
    const createPost = await prisma.post.create({ data:post })

    if(body.url){
        let tmp = JSON.parse(body.url)
        tmp.forEach(async (elem:string)=>{
            postUrl = {
                url: elem,
                postId: createPost.id
            }
            await prisma.postUrl.create({
                data: postUrl
            })
        })
    }

    return {
        createPost: createPost,
      }
  })
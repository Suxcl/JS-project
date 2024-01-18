import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.id) as number

    const posts = await prisma.post.findMany(
        {
            where: {
                authorId: id
            }
        }
    )

    return {
      posts: posts
    }
  })
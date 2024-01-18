import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    
    

    const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
    
    return {
        user: user
    }

    })
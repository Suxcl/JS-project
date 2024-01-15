import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let user = null

    // console.log('getUserByEmail')
    
    if (!regex_email.test(body.email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email did not meet the requirements',
            statusText: body.email
        })
    }else{
        user = await prisma.user.findUnique({
            where: {
                email: body.email
            },
        })
    }
    return {
        user: user
    }

    })
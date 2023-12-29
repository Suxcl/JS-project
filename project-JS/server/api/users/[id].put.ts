import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    const body = await readBody(event)
    let user = null
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }else{
        user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
                surname: body.surname
            }
        })
    }
    return {
        user: user
    }

    })
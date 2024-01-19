import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number
    let invites = await prisma.invite.findMany()
    
    return {
        invites: invites
    }

    })
import { PrismaClient, Prisma } from "@prisma/client"
import { idShouldBeInteger } from "~/composables/errors/idShouldBeInteger"

const prisma = new PrismaClient

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id) as number 
    
    if (!Number.isInteger(id)) {
        idShouldBeInteger()
    }else{
        await prisma.chat.delete({
            where: {
                id: id
            }
        })
        await prisma.chatUser.deleteMany({
            where: {
                chatId: id
            }
        })
        await prisma.chatMessage.deleteMany({
            where: {
                chatId: id
            }
        })
    }
    return `Post with id ${id} deleted successfully with urls`
})
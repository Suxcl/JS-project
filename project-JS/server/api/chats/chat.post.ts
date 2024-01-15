import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    
    // post body
    // name: string
    // users: number[] as String


    const newChat = await prisma.chat.create({ 
        data: {
            name: body.name,
        }
    })
    let chatUsers:number[] = []
    let tmp = JSON.parse(body.users)
    tmp.forEach(async (elem:number)=>{
        await prisma.chatUser.create({
            data: {
                chatId: newChat.id,
                chatUser: elem
            }
        })
        chatUsers.push(elem)
    })
    return {
        chat: newChat,
        chatUsers: chatUsers
      }
  })
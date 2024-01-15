export {}



declare global {

    interface Post {
        id: number
        title: string
        content: string
        authorId: number
        likes: number
        dislikes: number
        createdAt: string
        updatedAt: string
        private: boolean
    }
    // interface Post {
    //     id: number
    //     title: string
    //     content: string
    //     authorId: number
    //     likes: number
    //     dislikes: number
    //     createdAt: string
    //     updatedAt: string
    //     private: boolean
    // }
}

export const idShouldBeInteger = () =>{
    throw createError({
        statusCode: 400,
        statusMessage: 'ID should be an integer',
    })
}


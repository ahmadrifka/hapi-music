const landing = {
    method: 'GET',
    path : '/',
    handler: (req, h) => {
        return h.response({
            statusCode: 200,
            message: "HELLO WORLD",
            
        })
        
    }
}

export default landing;
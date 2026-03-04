const GET = ()=>{
    return(new Response("GET request received"))
}
const POST = ()=>{
    return(new Response("POST request received"))
}
const PUT = ()=>{
    return(new Response("PUT request received"))
}
const DELETE = ()=>{
    return(new Response("DELETE request received"))
}

export { GET, POST, PUT, DELETE }
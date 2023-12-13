const http = require ("http");
const port = 8081;
const todolist= ["Hey everyone","hope all","doing good","Over there."]

http.createServer((req,res)=>{
    const {method,url}=req;
    if(url=== "/todos"){
        if(method==="GET"){
        console.log("You are in the todos route and it's the GET method")
        res.writeHead(200,{"content-type":"text/html"})
        res.write(todolist.toString())
        res.end()
        }
    } else if(url=== "/"){
        console.log("you are in the home Route ")
    }
})
.listen(port,()=>{
    console.log(`Hey your server has statrted on port ${port}`)
})
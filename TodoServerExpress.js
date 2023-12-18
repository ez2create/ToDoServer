const express = require("express")
const app = express()
app.use(express.json())
var port = 8081;

const todolist= ["Hey everyone","hope all","doing good","Over there."]

app.get("/todos",(req,res)=>{
    res.status(200).send(todolist)
})

app.listen(port,()=>{
    console.log(`we have successfully started our server with node express ${port}`) 
})

const express = require("express")
const app = express()
app.use(express.json())
var port = 8081;

const todolist= ["Hey everyone","hope all","doing good","Over there."]

app.get("/todos",(req,res)=>{
    res.status(200).send(todolist)
})
app.post("/todos",(req,res)=>{
    let newitem = req.body.item;
    todolist.push(newitem)
    res.status(201).send({
        Massage: "Item successfully added"
    })
})
app.delete("/todos",(req,res)=>{
    let deleteItem = req.body.item;
    todolist.find((elem,index)=>{
        if (elem===deleteItem){
            todolist.splice(index,1);
        }
    })
    res.status(204).send({
        Massage: "Item successfully Deleted"
    })
})
app.all("/todos",(req,res)=>{
    res.status(501).send({
        Massage:"Not implimented yet"
    })
})
app.all("*",(req,res)=>{
    res.status(501).send({
        Massage:"Not added yet"
    })
})

app.listen(port,()=>{
    console.log(`we have successfully started our server with node express ${port}`) 
})

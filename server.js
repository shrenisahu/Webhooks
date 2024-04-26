const express=require('express');
const app=express();


app.post("/github-webhook",(req,res)=>{
console.log("insideyy",req.data)

})

app.get("/github",(req,res)=>{
    console.log("inside get")
    res.send("received")
    
    })

app.listen(3001,()=>{
console.log("hey")
})
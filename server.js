const express=require('express');
const app=express();
const PORT=3000;

app.post("/github-webhook",(req,res)=>{
console.log("insideyy",req.data)

})

app.get("/github",(req,res)=>{
    console.log("inside get")
    res.send("received")
    
    })

app.listen(PORT,()=>{
console.log("hey")
})

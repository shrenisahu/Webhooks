const express=require('express');
const app=express();
const PORT=3001;

app.post("/github-webhook",(req,res)=>{
console.log("insideyy",req.data)
})

app.get("/github",(req,res)=>{
    console.log("inside get")
    res.end("received")
    
    })

    app.get("/",(req,res)=>{
        console.log("inside get")
        res.end("received 11")
        
        })
    

app.listen(PORT,(req,res)=>{
console.log("hey")

})

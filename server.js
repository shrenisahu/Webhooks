const express=require('express');
const app=express();
const PORT=3001;

app.use(express.json())
app.post("/github-webhook",(req,res)=>{
console.log("insideyy",req.body)
res.status(200);
res.end("done")

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

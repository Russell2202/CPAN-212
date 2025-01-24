const express = require("express")
const dotenv = require("dotenv")
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req,res)=>{
    res.send("Welcome to the server! - GET")
})

app.post("/", (req,res)=>{
    res.send("Welcome to the server! - POST")
})

app.put("/", (req,res)=>{
    res.send("Welcome to the server! - PUT")
})

app.delete("/", (req,res)=>{
    res.send("Welcome to the server! - DELETE")
})

app.get("/watch", (req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    res.send("Welcome to the watch list")
})

app.get("/itm/:itemID", (req,res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send("Welcome to the item list")
})
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})


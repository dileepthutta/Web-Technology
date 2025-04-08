//Creating a server and Routing between.s
const express =require('express');



const app = express()

const port = 5000

//Routing The Server ***It Sends a message when it routes to /apple.
app.get('/apple',(req,res)=>{
    res.send("Apple is Red in color");
})

//To Start The Server 
app.listen(port,()=>{
    console.log("Server Started and Running Successfully !");
})

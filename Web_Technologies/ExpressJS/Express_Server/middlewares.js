// //Importing Express Modules.
// const express = require("express");

// // Storeing All the Meathods in the variable.
// const app = express();

// //Initizalise the port number 
// const port = 5000;

// //Creating Middlewares.
// app.use((req,res,next)=>{
//     if(10>20){
//         next();  //It doesn't give any Expection and Executes.
//     }
// })
 
// //3 Routes
// app.get('/home',(req,res)=>{
//     res.send("Hello , I at the Home Page.");
// });

// app.get('/about',(req,res)=>{
//     res.send("This is About Page.");
// });

// app.get('/user/121',(req,res)=>{
//     res.send("You searched for 121");
// });

//Creating Server

// app.listen(port,()=>{
//     console.log("Server Started and Running Successfully !");
// });




//Creating a Server by assigning the middlewares to the variables with different way :

//Importing Express Modules.
const express = require("express");

// Storeing All the Meathods in the variable.
const app = express();

//Initizalise the port number 
const port = 5000;

//Assigning middlewares to variables.
const  firstHandler = ((req,res,next)=>{
    if(10<20){
        next();
    }
    else{
        console.log("Sorry you are not allowed")
    }
})


const  secondHandler = ((req,res,next)=>{
    if(10<20){
        next();
    }
    else{
        console.log("Sorry you are not allowed");
    }
});

const  thirdHandler = ((req,res,next)=>{
    if(10<20){
        next();
    }
    else{
        console.log("Sorry you are not allowed")
    }
})
 
//3 Routes
app.get('/home',firstHandler,(req,res)=>{
    res.send("Hello , I at the Home Page.");
});

app.get('/about',secondHandler,(req,res)=>{
    res.send("This is About Page.");
});

app.get('/user/121',thirdHandler,(req,res)=>{
    res.send("You searched for 121");
});



//Creating a Server :
app.listen(port,()=>{
    console.log("Server Started and Running Successfully !");
});



//Importing the Package || module
const fs = require('fs')

//Reading the Data from File.
// utf-8 : converts the binary code into readable code.
fs.readFile("nodejs.txt",'utf-8',(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
}
)


//Creating a file using fs module 
fs.writeFile('demo.html','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("File created successfully ");
})


//Creating a file and writing the data into the file:
// const content_data = "This is created dynamically with the nodejs"
fs.writeFile('demo.html',content_data,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File content is success.")
    }
})


//How to change the file-name of our File:
//Syntax :- fs.rename('old_file_name','New_file_name')
fs.rename('demo.html','renamed_file.html',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File name successfully modified")
    }
})



//How to Delete a file 
fs.unlink("renamed_file.html",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted Successfully.")
    }
})
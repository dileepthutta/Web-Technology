//Creating a server
const http = require('http');


const myServer = http.createServer((request,response)=>{
    response.write("Welcome to Deepu's Server");
    response.end();
});

myServer.listen(5500);


//Creating an HTTP Request as a Client.

// const options = {
//     hostname: 'example.com',
//     port: 80,
//     path: '/',
//     method: 'GET'
//   };
  
//   const req = http.request(options, (res) => {
//     let data = '';
  
//     res.on('data', chunk => {
//       data += chunk;
//     });
  
//     res.on('end', () => {
//       console.log(data);
//     });
//   });
  
//   req.on('error', error => {
//     console.error(error);
//   });
  
//   req.end();
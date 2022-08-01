// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


const http = require('http');

const server = http.createServer((req,res)=>{
   
    res.statusCode =200;
    res.setHeader('content-Type','text/html');
    res.end('<h1>THIS is first</h1><h3>this is seconde</h3><p>this is third</p>')
});

    // res.send('<h2>THIS is my second response</h2>')
    // res.send('<p>This is my third response</p>')

server.listen (3000)
   console.log('server starting on port 3000')
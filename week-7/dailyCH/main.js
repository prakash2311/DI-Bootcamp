const impo = require('./script.js')
const http = require('http')

const b =5 ;
console.log(impo.largeNumber+b);

http.createServer(function (req, res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<p>My Module is:</p>');
    res.end(`${impo.largeNumber+b}</br> <h1>Hi there at the frontend</h1>`)
}).listen(3000 , function(){
    console.log("i am listening....")
    console.log("i am listening.....");
});
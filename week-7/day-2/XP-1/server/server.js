const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user))
});
server.listen(8080)
console.log('server running on port 8080');
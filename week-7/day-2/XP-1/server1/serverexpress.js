const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Prakash Devat</h1>')
})

app.listen(3000, (req,res)=>{
    console.log('server running on port 3000');
})
const express = require('express')
const {user} = require('./script.js')

const app = express()


app.listen(3001, (req,res)=>{
    console.log('server running on port 3001');
    console.log(user);
})
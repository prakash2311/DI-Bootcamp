const express = require('express')

const app = express()

app.get('/:id', (req,res)=>{
    console.log(req.params)
    res.send(`${req.params.id}`)
})

app.listen(3000, (req,res) =>{
    console.log('server runing on 3000');
})
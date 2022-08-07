const express = require('express');

const app = express();

app.use('/',express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));




app.listen(3000, (req,res) =>{
    console.log('server runing on port 3000');
})


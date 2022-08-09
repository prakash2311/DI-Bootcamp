// 1. Create a forder name it server
// 2. npm init -y
// 3. install - express knex pg - devD - nodemon -D
// 4. start script add nodemon server.js
// 5. create a server
// 6. Connect the DB
// 7. Check your API5


const express = require('express');
const knex =require('knex');
const dotenv = require('dotenv')
// const {db} = require('./conection/herokupg.js')
// const {getAllProducts} = require('./module/products.js')
const products_router = require('./routes/products.js')


dotenv.config();

const app = express()


app.listen(process.env.PORT, (req,res) =>{
    console.log(`port start on ${process.env.PORT}`);
})

app.use('/api/products',products_router)
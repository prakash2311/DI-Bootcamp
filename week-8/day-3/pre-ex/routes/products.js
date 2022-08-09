const express = require('express');

const router = express.Router();

const {_getAllProducts, _getOneProducts} = require('../controllers/products.js')

router.get('/all/:id', _getOneProducts)
// router.get('/all', (req,res)=>{
       
// })

module.exports=router
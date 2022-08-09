const {getAllProducts, getOneProduct} = require('../module/products.js')

const _getAllProducts= (req,res) =>{
    getAllProducts()
    .then(ret =>{
        res.json(ret)
    })
    .catch(e =>{
        console.log(e);
        res.status(404).json({msg:'not found'})
    })
}
const _getOneProducts = (req, res) =>{

 
}

module.exports={
    _getAllProduct,
    _getOneProducts,
    
}
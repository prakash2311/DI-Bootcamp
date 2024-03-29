const {getAllProducts,
      getOneProduct,
      searchProduct,
      insertProduct} = require('../modules/products.js');

// get all products
// cuRd - Read

const _getAllProducts = (req, res) => {
  getAllProducts()
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

const _getOneProduct = (req,res) => {
  getOneProduct(req.params.id)
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

const _searchProduct = (req,res) => {
  searchProduct(req.query.q)
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

const _insertProduct = (req,res) =>{
  insertProduct(req.body)
  .then(ret=>{
    res.json(ret)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

module.exports = {
  _getAllProducts,
  _getOneProduct,
  _searchProduct,
  _insertProduct
}

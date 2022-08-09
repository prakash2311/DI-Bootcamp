const {db} = require('../conection/herokupg.js');
const { search } = require('../routes/products.js');

const getAllProducts = () => {
    return db('products')
    .select('id','name','price')
    .orderBy('name')
}

const getOneProduct = (product_id) => {
    return db('products')
    .select('id','name','price')
    .where({id:product_id})
};

const searchProduct = (name) => {
    return db('products')
    .select('id','name','price')
    .whereILike('name',`${name}%`)
}
module.exports={
    getAllProducts,
    getOneProduct,
    searchProduct
}
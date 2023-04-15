
const Products = require('../models/product')
const getAllProductsStatic = async(req, res) =>{
    const search = 'ba'
    const products = await Products.find({
        name: {$regex: search, $options: 'i'}
    })
    res.status(200).json({success: true, products})
}

const getAllProducts = async(req, res) =>{
    const {featured,company,name} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }
    const products = await Products.find(queryObject)
    res.status(200).json({success:true,products,count:products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}


const Products = require('../models/product')
const getAllProductsStatic = async(req, res) =>{
    const products = await Products.find({})
    res.status(200).json({success: true, products})
}

const getAllProducts = async(req, res) =>{
    const {featured,company} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    const products = await Products.find(queryObject)
    res.status(200).json({success:true,products,count:products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}

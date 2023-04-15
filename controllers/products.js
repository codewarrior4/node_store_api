
const Products = require('../models/product')
const getAllProductsStatic = async(req, res) =>{
    const search = 'ba'
    const products = await Products.find({
        name: {$regex: search, $options: 'i'}
    })
    res.status(200).json({success: true, products})
}

const getAllProducts = async(req, res) =>{
    const {featured,company,name,sort} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = name
    }
    let results = Products.find(queryObject)
    let sortList = '';
    if(sort){
        const sortList = sort.split(',').join(' ')
        results = results.sort(sortList)
        console.log(sortList);

    }else{
        results =results.sort('createdAt')
    }
    const products = await results.select('name price')
    res.status(200).json({success:true,products,count:products.length})
}

const getProductSort = async(req, res) =>{
    const products = await Products.find({}).sort('price -name')
    res.status(200).json({success:true,products})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
    getProductSort
}

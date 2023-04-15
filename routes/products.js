const express = require('express')

const router = express.Router()
const {getAllProducts,getAllProductsStatic,getProductSort} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)
router.route('/sort').get(getProductSort)
module.exports = router
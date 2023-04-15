const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    featured:{
        type: Boolean,
        default: false
    },
     
    ratings: {
        type: Number,
        default: 0
    },
    company:{
        type: String,
        required: [true, 'Please enter product company'],
        enum:{
                values: ['ikea','liddy','caressa','marcos'],
                message:'{VALUE is not supported}'

        }
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Product', productSchema)
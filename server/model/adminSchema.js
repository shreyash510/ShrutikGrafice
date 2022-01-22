const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    DiscountPrice: {
        type: Number,
        required: true
    },
    OriginalPrice: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const AdminData = mongoose.model('ProductList', adminSchema)
module.exports = AdminData;
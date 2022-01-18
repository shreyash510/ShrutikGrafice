const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    img : {
        type : String,
        required :true
    }, 
    price : {
        type : Number, 
        required : true
    }
})

const AdminData = mongoose.model('bannerList', adminSchema)
module.exports = AdminData;
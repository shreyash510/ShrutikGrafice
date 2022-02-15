const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    }, 
    msg : {
        type : String, 
        required : true
    }
})

const ContactData = mongoose.model('Contact', contactSchema);
module.exports = ContactData;
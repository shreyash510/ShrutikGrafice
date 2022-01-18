const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: './src/config.env'});

mongoose.connect("mongodb://localhost:27017/shrutikGraphic",{ 
    useNewUrlParser:true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log('connection successful...')
}).catch((err)=>{
    console.log("connection failed!!");
})

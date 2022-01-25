const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: './src/config.env'});
const db = process.env.DATABASE;
// console.log(db)
// mongoose.connect("mongodb://localhost:27017/shrutikGraphic",{ 
//     useNewUrlParser:true,
//     useUnifiedTopology : true
// })

mongoose.connect(db, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
})
.then(()=>{
    console.log('connection successful...')
}).catch((err)=>{
    console.log("connection failed!!",err);
})

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const tok = dotenv.config({path: './src/config.env'});
const bcrypt = require('bcryptjs');

// console.log(tok)
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    sirname: {
        type: String,
        required: true
    },
    email: {
         type: String,
        required: true,
        lowercase:true,
    },
    phone: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    cpass: {
        type: String,
        required: true
    },
    data :{
        type: Date,
        default:Date.now
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

//password Hashing 
userSchema.pre('save', async function (next){
    if(this.isModified('pass')){
        this.pass = await bcrypt.hash(this.pass, 12);
        this.cpass = await bcrypt.hash(this.cpass, 12);
    }
    next();
})


// genrate user token Id 
userSchema.methods.generateAuthToken = async function(){
    try{
        // jwt.sign(payload,secrete key) ...............genrate token key 
        let newToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: newToken});
        await this.save();
        return newToken;
    }catch(e){
        console.log(e);
    }
}

const UserData = mongoose.model('USER', userSchema);
module.exports = UserData;

// module.exports = mongoose.model("USER", userSchema);



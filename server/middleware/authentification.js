const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

const Authentification = async (req, res, next) => {
    try {
        if(!req.cookies.jwtoken){
            token = 'null'
        }else {
            const token = req.cookies.jwtoken;
            // console.log('token :', token)
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
            // if(verifyToken){ console.log('is match') }else{ console.log('not match')} 
            const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
            // res.status(200).json('hello ',rootUser.firstname)
            if (!rootUser) {
                throw new Error('user not found')
            }

            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            res.status(200).send(`Hello ${rootUser.firstname}`)
        }
    } catch (err) {
        res.status(401).send('Unautherise user');
        console.log(err)
    }
}

module.exports = Authentification;
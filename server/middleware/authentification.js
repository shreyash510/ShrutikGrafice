const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

const Authentification = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        console.log("token :", token)
        // console.log('token :', token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        console.log(rootUser)

        if (!rootUser) {
            throw new Error('user not found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    }
    catch (err) {
        res.status(401).send('Unautherise user');
        console.log(err)
    }

    // next()
}

module.exports = Authentification;
const express = require('express');
const router = express.Router();
const UserData = require('../model/userSchema');
const AdminData = require('../model/adminSchema');
const cors = require('cors')
const bcrypt = require('bcryptjs')
router.use(express.urlencoded({ extended: true }));
router.use(cors())
router.use(express.json())

const jwt = require('jsonwebtoken');
// router.use(jwt())
const cookieParser = require('cookie-parser')
router.use(cookieParser());

const authentification = require("../middleware/authentification")

router.get('/', (req, res) => {
    res.send("this is router home page");
});


// user register
router.post('/register', async (req, res) => {
    const { firstname, email, phone, state, pass, cpass, sirname } = req.body;
    const userExist = await UserData.findOne({ email: email })
    try {
        if (userExist) {
            return res.status(422).json({
                error: 'Email already exist'
            })
        } else {
            const userinfo = UserData({
                firstname, state, email, phone, pass, cpass, sirname
            })
            if (userinfo) {
                userinfo.save()
                    .then(
                        res.status(201).json({
                            message: 'user successfully inserted'
                        })
                    ).catch((e) => {
                        res.status(500).json({
                            error: "Failed to registered"
                        });
                    })
            } else {
                res.json({
                    error: 'registration failed'
                })
            }
        }
    } catch (e) {
        console.log(e)
    }
})

// user login 
router.post("/login", async (req, res) => {
    try {
        const { email, pass } = req.body
        const userLogin = await UserData.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(pass, userLogin.pass);

            const token = await userLogin.generateAuthToken();
            // console.log(token)

            res.cookie('jwtoken', token,{
                expires: new Date(Date.now()+ 25892000000),
                httpOnly:true
            })
            
            if (!isMatch) {
                res.status(200).json({
                    error : 'Please Enter valid email and Password'
                })
            } else {
                res.status(200).json({
                    message: 'User Successfully Login'
                })
            }
        } else {
            return res.status(400).json({
                error: 'Invalid Creadients'
            })
        }
    } catch (e) {
        console.log(e)
    }
})

// user forgot password
router.post('/forgot', async (req, res) => {
    // console.log(email)
    try {
        const { email, pass, cpass } = req.body;
        const searchEmail = await UserData.findOneAndUpdate({ email: email }, { pass: pass, cpass: cpass })
        if (searchEmail) {
            return res.status(200).json({
                message: 'Enter new Password, Click Update button and Go to Login Page'
            })
        } else {
            return res.json({
                error: 'Please Enter Valid Email!'
            })
        }
    } catch (e) {
        console.log(e)
    }

    // try {
    //     const { email } = req.body;
    //     const searchEmail = await UserData.findOne({ email: email })
    //     if (searchEmail) {
    //         res.status(200).json({
    //             message: 'Email Match Successfully'
    //         })
    //     } else {
    //         res.json({
    //             error: 'Please Enter Valid Email!'
    //         })
    //     }

    //     const {pass, cpass} = req.body;
    //     const _id = searchEmail._id;
    //     const updatePass = await UserData.findByIdAndUpdate({_id:_id},{pass,cpass},{new:true})
    //     if(updatePass){
    //         res.status(200).json({
    //             message: 'Password Update Successfully'
    //         })
    //     } else {
    //         res.json({
    //             error: 'Update Failed!'
    //         })
    //     }

    // } catch (e) {
    //     console.log(e)
    // }
})
router.get('/create-product', async (req, res) => {
    try {
        const productData = await AdminData.find();
        res.send(productData)
    } catch (e) {
        console.log(e)
    }
})

router.get("/create-product/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id)
        const bannderData = await AdminData.findById(_id);

        if (!bannderData) {
            return res.status(404).send();
        } else {
            return res.send(bannderData);
        }
    } catch (e) {
        console.log(e);
    }
})

router.post('/create-product', async (req, res) => {
    try {
        const { title, DiscountPrice, OriginalPrice, category, description, image } = req.body
        // console.log(title, DiscountPrice, OriginalPrice, category,description,image)
        const productData = AdminData({
            title, DiscountPrice, OriginalPrice, category, description, image
        })
        if (productData) {
            return productData.save().then(
                res.json({
                    message: 'Product successfully inserted'
                })
            ).catch(e => console.log(e))
        } else {
            return res.json({
                error: 'Product insertion Failed'
            })
        }
    }
    catch (e) { console.log(e) }
})

router.get('/about', authentification, (req, res)=>{
    // res.json('hello this is about page')
    res.send(req.rootUser)
})

router.get('/view', authentification, (req, res)=>{
    // res.json('hello this is about page')
    res.send(req.rootUser)
})

router.get('/logout', authentification, (req, res)=>{
    res.clearCookie('jwtoken', path="/")
    res.status(200).send('user logout')
})
module.exports = router;
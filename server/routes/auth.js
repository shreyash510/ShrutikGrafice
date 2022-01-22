const express = require('express');
const router = express.Router();
const UserData = require('../model/userSchema');
const AdminData = require('../model/adminSchema');
const cors = require('cors')
router.use(express.urlencoded({ extended: true }));
router.use(cors())
router.use(express.json())


router.get('/', (req, res) => {
    res.send("this is router home page");
});

router.get('/about', (req, res) => {
    res.send("this is router about page")
})

// user register
router.post('/register', async (req, res) => {
    // console.log(req.body)
    const { name, email, phone, profession, pass, cpass } = req.body;
    // console.log(name)
    const userExist = await UserData.findOne({ email: email })
    try {
        if (userExist) {
            return res.json({
                error: 'user already exist'
            })
            // console.log('user already exist')
        } else {
            const userinfo = UserData({
                name, email, phone, profession, pass, cpass
            })

            // console.log(userinfo);
            if (userinfo) {
                userinfo.save().then(
                    res.json({
                        message: 'user successfully inserted'
                    })
                ).catch(e => console.log(e))
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
        // console.log(email)
        const newData = await UserData.findOne({ email: email, pass: pass });
        if (newData) {
            res.status(200).json({
                message: 'user login successfully'
            })
        } else {
            res.json({
                error: 'Please Enter valid email and Password'
            })
        }
    } catch (e) {
        console.log('Login failed!')
    }
})

// user forgot password
router.post('/forgot', async (req, res) => {
    // console.log(email)
    try {
        const { email, pass, cpass } = req.body;
        const searchEmail = await UserData.findOneAndUpdate({ email: email }, { pass: pass, cpass: cpass })
        if (searchEmail) {
            res.status(200).json({
                message: 'Enter new Password, Click Update button and Go to Login Page'
            })
        } else {
            res.json({
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
router.get('/create-product', async (req, res)=>{
    try{
        const productData = await AdminData.find();
        res.send(productData)
    }catch(e){
        console.log(e)
    }
})

router.post('/create-product', async (req, res) => {
   try{
        const {title, DiscountPrice, OriginalPrice, category,description,image} = req.body
        // console.log(title, DiscountPrice, OriginalPrice, category,description,image)
        const productData =  AdminData({
            title, DiscountPrice, OriginalPrice, category,description,image
        })
        if(productData){
            productData.save().then(
                res.json({
                    message: 'Product successfully inserted'
                })
            ).catch(e=>console.log(e))
        }else{
            res.json({
                error: 'Product insertion Failed'
            })
        }
    }
    catch(e){console.log(e)}
})

module.exports = router;
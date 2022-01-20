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
router.post('/forgot', async (req, res)=>{
    try{
    const {email} = req.body
    const forgotPass = await UserData.findOne({email: email});
    if(forgotPass){
        res.json({
            message: 'Email successfully Matched!'
        })
    }else{
        res.json({
            error: 'Please Enter Valid email !'
        })
    }
}catch(e){
    res.json({
        error: 'server error plz try again'
    })
}
}) 


router.post('/admin-data', async(req, res) => {
    const { title, img, price } = req.body;
    const adminData =await AdminData({
        title, img, price
    });
    try {
        if (adminData) {
            adminData.save()
                .then(
                    res.json({
                        message: "Data Inserted successfully"
                    })
                )
        } else {
            res.json({
                error: "Data Insertion Failed"
            })
        }
    } catch (e) {
        res.json({
            error: "Error Found"
        })
    }
});

router.get("/admin-data", async (req, res)=>{
    try{
        const bannderData = await AdminData.find();
        res.send(bannderData);
    }catch(e){
        console.log(e);
    }
})


router.get("/admin-data/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        // console.log(_id)
        const bannderData = await AdminData.findById(_id);

        if(!bannderData){
            return res.status(404).send();
        }else{
            res.send(bannderData);
        }
    }catch(e){
        console.log(e);
    }
})


module.exports = router;
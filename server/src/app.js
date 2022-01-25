const express = require("express");
const port = process.env.PORT || 8000
const app = express();
require('../db/conn');
require('../model/userSchema');
const authRoute = require('../routes/auth');
app.use(express.json());

app.use(authRoute);

// app.get('/', (req, res)=>{
//     res.send('this is home page');
// })

app.get('/login', (req, res)=>{
    res.send('this is login page');
})

// app.get('/register', (req, res)=>{
//     res.send('this is register page');
// })

app.listen(8000,(err)=>{
    console.log(`listening at: ${port}....`)
})
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

app.post('/contact', (req, res)=>{
    res.cookie('test', 'this is test cookie')
    res.send('this is contact page');
})

app.listen(8000,(err)=>{
    console.log(`listening at: ${port}....`)
})
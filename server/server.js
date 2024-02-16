const express = require('express');
const mongoose = require('mongoose');
const RegisteredModel = require('./models/Register')

const app = express();
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/PMS')

app.post('/register',(req,res)=>{
    RegisteredModel.create(req.body)
    .then(register => register.json(register))
    .catch(err => console.log(err));
})



app.use(cors());
app.use(express.json());


app.listen(8080)
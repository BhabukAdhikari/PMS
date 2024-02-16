const mongoose = require('mongoose');

const RegisteredSchema = new mongoose.Schema({
    email:String,
    password:String,
})
const RegisteredModel = mongoose.model('register',RegisteredSchema);

module.exports= RegisteredModel;
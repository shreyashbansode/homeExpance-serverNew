const mongoose = require('mongoose');

const expanceSchema = mongoose.Schema({
    productName: String,
    Shreyash: Number,
    Prem: Number,
    Hrishi: Number,
    productPrice: Number,
    productDesc: String
})

module.exports = mongoose.model('expance', expanceSchema);
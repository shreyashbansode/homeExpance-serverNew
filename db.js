const mongoose = require('mongoose');
const dotenv = require('dotenv/config');

const DBurl = process.env.DBHOST;

mongoose.connect(`${DBurl}`);

module.exports = mongoose

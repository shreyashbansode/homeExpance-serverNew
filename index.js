const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors')
const dotenv = require('dotenv/config');
const Mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const DBurl = process.env.DBHOST;

// db.connection.on('connected', (err) => {
//     if (err) {
//         console.log('error while connecting database')
//     } else {
//         console.log('database is connected')
//     }
// })
app.use(express.json());
app.use(cors())
app.use('/', require('./routes/expanceRoute'));

Mongoose.connect(DBurl)
    .then((resp) => {
        if (resp) {
            console.log("Database connected.")
        }
        else {
            console.log("Failed to connect to database")
        }
    });


app.listen(PORT, () => {
    console.log('server is started', PORT)
})

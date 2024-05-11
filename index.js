const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors')
const dotenv = require('dotenv/config');

const PORT = process.env.PORT || 5500;

db.connection.on('connected', (err) => {
    if (err) {
        console.log('error while connecting database')
    } else {
        console.log('database is connected')
    }
})
app.use(express.json());
app.use(cors())
app.use('/', require('./routes/expanceRoute'));

app.listen(PORT, () => {
    console.log('server is started', PORT)
})

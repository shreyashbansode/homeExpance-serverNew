const express = require('express');
const routes = express.Router();

routes.post('/create', require('../controllers/expanceControlles').createExpance);
routes.get('/allExpance', require('../controllers/expanceControlles').getAllExpance);
routes.put('/updateExpance/:ID', require('../controllers/expanceControlles').updateExpense)

module.exports = routes


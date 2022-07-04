const express = require('express');
const Router = express.Router();

const allcontroller = require('../controllers/index');
Router.post('/create', allcontroller.create);
Router.get('/getCompany', allcontroller.getCompany);

module.exports = Router;

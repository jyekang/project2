const express = require('express');
const router = express.Router();
const clientcontroller = require('../controllers/clientController');
const path = require('path');



router.get('/getAllClients', clientcontroller.getAllClients);

module.exports = router
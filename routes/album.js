const express = require('express');
const router = express.Router();
const albumcontroller = require('../controllers/albumController')
const path = require('path');


router.get('/getAllAlbums', albumcontroller.getAllAlbums);

module.exports = router
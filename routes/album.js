const express = require('express');
const router = express.Router();
const { getAllAlbums } = require('../controllers/albumController')
const path = require('path');


router.get('/getAllAlbums', getAllAlbums);

module.exports = router
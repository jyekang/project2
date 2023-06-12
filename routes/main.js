const express = require('express')
const router = express.Router()
const { getAllPhotos } = require('../controllers/photoController')

router.get('/photos', getAllPhotos)

module.exports = router
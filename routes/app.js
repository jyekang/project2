const express = require('express')
const router = express.router()

const albumrouter = require('./album')
const photorouter = require('./main')
const photo = require('../models/photo')

router.use('/photo', photorouter)
router.use('/album', albumrouter)

module.exports = router

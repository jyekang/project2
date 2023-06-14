const express = require('express')
const router = express.Router()

const albumrouter = require('./album')
const photorouter = require('./main')

router.use('/', photorouter)
router.use('/', albumrouter)

module.exports = router

const express = require('express')
const router = express.Router()

const albumrouter = require('./album')
const photorouter = require('./main')
const clientrouter = require('./client')

router.use('/', photorouter)
router.use('/', albumrouter)
router.use('/', clientrouter)

module.exports = router

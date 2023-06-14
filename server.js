

const express = require('express')
const PORT = process.env.PORT || 3002
const cors = require('cors')
const db = require ('./db')
const Router = require('./routes/app')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const logger = require('morgan');
app.use(logger('dev'))

////
// front-end and backend routes
////

app.use('/', express.static('front'))

app.use('/api', Router)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})




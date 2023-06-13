// require('dotenv').config();

const express = require('express')
const PORT = process.env.PORT || 3002
const cors = require('cors')
const db = require ('./db')
const photoRouter = require('./routes/main')
const photo = require('./models/photo')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


////
// front-end and backend routes
////
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.use('/', photoRouter)

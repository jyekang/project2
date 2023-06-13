const mongoose = require('mongoose')


///////
  // database routes
  mongodb://localhost:27017
  /////////////
  

mongoose
    .connect(`mongodb://127.0.0.1:27017/photoGallery`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Photo = new Schema (
    {
        image: { type: String, required: true },
        album: { type: String, required: false},
        dateTaken: { type: Date, required: false}
    },
    { timestamps: true }
)


module.exports = mongoose.model('photo', Photo)
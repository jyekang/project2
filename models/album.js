const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema (
    {
        title: { type: String, required: true},
        image: [ { type: Schema.Types.ObjectId, ref: 'photo'}],
        datecreated: { type: Date, required: true}
    },
    { timestamps: true }
)


module.exports = mongoose.model('album', Album)
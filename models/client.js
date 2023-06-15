const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema (
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true },
        album: [{ type: Schema.Types.ObjectId, ref: 'Album', required: false }]
    },
    { timestamps: true }
)


module.exports = mongoose.model('client', Client)
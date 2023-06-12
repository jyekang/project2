const { Schema } = require('mongoose')

const photoSchema = new Schema (
    {
    image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = photoSchema
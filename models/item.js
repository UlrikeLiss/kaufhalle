const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: '1',
        required: true
    }
})

module.exports = mongoose.model('Item', ItemSchema)

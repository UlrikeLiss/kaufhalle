const mongoose = require ('mongoose')

const ListSchema = new mongoose.Schema( {
    name: {
    type: String,
    required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
})


module.exports = mongoose.model('List', ListSchema);
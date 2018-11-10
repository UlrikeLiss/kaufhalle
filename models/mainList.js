const mongoose = require ('mongoose')

const MainListSchema = new mongoose.Schema( {
    name: String,
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
})


module.exports = mongoose.model('MainList', MainListSchema);
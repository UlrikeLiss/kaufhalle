const mongoose = require ('mongoose')

const MainListSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
        },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
})


module.exports = mongoose.model('MainList', MainListSchema);

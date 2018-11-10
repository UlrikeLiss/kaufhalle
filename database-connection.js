const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kaufhalle', { useNewUrlParser: true })

    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
    })
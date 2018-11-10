const ItemModel = require('../models/item')

async function load() {
    return ItemModel.find()
}

async function add(item) {
    return ItemModel.create(item)
}

async function deleteOne(name) {
    return ItemModel.deleteOne({name})
}

    
module.exports = {
    load,
    add,
    deleteOne
}



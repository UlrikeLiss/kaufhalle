const ItemModel = require('../models/item')
const ListModel = require('../models/list')


async function createAndAddItemToList(name, item) {
    
    const list = await ListModel.findOne({name})
    const item = await ItemModel.create(item)

    list.items.push(item)

    await list.save()
    return list
}


async function load() {
    return ListModel.find().populate('items')
}

async function add(list) {
    return ListModel.create(list)
}

async function deleteOne(name) {
    return ListModel.deleteOne({name})
}
    
module.exports = {
    load,
    add,
    deleteOne,
    createAndAddItemToList
}

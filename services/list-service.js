const ItemModel = require('../models/item')
const ListModel = require('../models/list')


async function createAndAddItemToList(name, item) {
    
    const list = await ListModel.findOne({name})
    const createdItem = await ItemModel.create(item)

    list.items.push(createdItem)

    await list.save()
    return list
}

async function emptyList(name) { 
    const list = await ListModel.findOne({ name })
    await list.save()
    list.items = []
    await list.save()
    return list
}

async function find(name) {
    const list = await ListModel.findOne({name}).populate('items')
    await list.save()
    return list
}

async function load() {
    return ListModel.find().populate('items')
}


async function deleteOne(name) {
    return ListModel.deleteOne({name})
}

    
module.exports = {
    load,
    deleteOne,
    emptyList,
    find,
    createAndAddItemToList
}

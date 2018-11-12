const MainListModel = require('../models/mainList')
const ListModel = require('../models/list')


async function createAndAddListToMainList(name, list) {
    
    const mainList = await MainListModel.findOne({name})
    const createdList = await ListModel.create(list)

    mainList.lists.push(createdList)

    await mainList.save()
    return mainList
}

async function load() {
    return MainListModel.find().populate('lists')
}

async function add(mainList) {
    return MainListModel.create(mainList)
}

async function deleteOne(name) {
    return MainListModel.deleteOne({name})
}
    
module.exports = {
    load,
    add,
    deleteOne,
    createAndAddListToMainList
}

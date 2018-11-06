const fs = require('fs')
var CircularJSON = require('circular-json') 
const ListModel = require('../models/list')
const dbPath = `${__dirname}/../database/list-database.json`

async function load() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const Records = CircularJSON.parse(file)
            resolve(Records)
       })
    })
}

async function add(list) {
    const allRecords = await load()
    const lastList = allRecords[allRecords.length - 1]
    const lastListsId = lastList && lastList.id || 0
    list.id = lastListsId + 1

    list = ListModel.create(list)
    allRecords.push(list)

    await save(allRecords)

    return list
}

async function del(listId) {
    const allRecords = await load()
    const listIndex = allRecords.findIndex(p => p.id == listId)
    if (listIndex < 0) return

    allRecords.splice(listIndex, 1)

    save(allRecords)
}

async function find(listId) {
    const allRecords = await load()

    return allRecords.find(p => p.id == listId)
}

function save(Records) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(Records), (err, file) => {
            if (err) return reject(err)
            resolve()
        })
    })
}
    
module.exports = {
    load,
    add,
    del,
    find,
    save
}

const fs = require('fs')
var CircularJSON = require('circular-json') 
const MainListModel = require('../models/mainList')

const dbPath = `${__dirname}/../database/mainList-database.json`

async function load() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const MainRecords = CircularJSON.parse(file)
            resolve(MainRecords)
       })
    })
}

async function add(mainList) {
    const allMainRecords = await load()
    const lastMainList = allMainRecords[allMainRecords.length - 1]
    const lastMainListsId = lastMainList && lastMainList.id || 0
    mainList.id = lastMainListsId + 1

    mainList = MainListModel.create(mainList)
    allMainRecords.push(mainList)

    await save(allMainRecords)

    return mainList
}

async function del(mainListId) {
    const allMainRecords = await load()
    const mainListIndex = allMainRecords.findIndex(p => p.id == mainListId)
    if (mainListIndex < 0) return

    allMainRecords.splice(mainListIndex, 1)

    save(allMainRecords)
}

async function find(mainListId) {
    const allMainRecords = await load()

    return allMainRecords.find(p => p.id == mainListId)
}

async function save(MainRecords) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(MainRecords), (err, file) => {
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

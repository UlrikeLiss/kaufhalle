const fs = require('fs')
var CircularJSON = require('circular-json') 
const ItemModel = require('../models/item')
const dbPath = `${__dirname}/../database/item-database.json`

async function load() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const Products = CircularJSON.parse(file).map(ItemModel.create)
            resolve(Products)
       })
    })
}

async function add(item) {
    const allProducts = await load()
    const lastItem = allProducts[allProducts.length - 1]
    const lastItemsId = lastItem && lastItem.id || 0
    item.id = lastItemsId + 1

    item = ItemModel.create(item)
    allProducts.push(item)

    await save(allProducts)

    return item
}

async function del(itemId) {
    const allProducts = await load()
    const itemIndex = allProducts.findIndex(p => p.id == itemId)
    if (itemIndex < 0) return

    allProducts.splice(itemIndex, 1)

    save(allProducts)
}

async function find(itemId) {
    const allProducts = await load()

    return allProducts.find(p => p.id == itemId)
}

async function save(Products) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(Products), (err, file) => {
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



const chalk = require('chalk')
const Item = require('./item')

module.exports = class List {
    constructor(name, id) {
        this.name = name
        this.id
        this.items = []
    }
    
    addListToMainList(mainList) {
        mainList.lists.push(this)
    }

    static create({ name, id, items }) {
        const list = new List(name, id)
        list.items = items.map(Item.create)
        return list
    }
    
    report() {
        console.log(this.name, this.id, this.items)
    }
  }
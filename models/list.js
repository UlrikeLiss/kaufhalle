const Item = require('./item')
module.exports = class List {
    constructor(name, id) {
        this.name = name
        this.id
        this.items = []
    }

    addItemToList(list) {
        list.items.push(this)
    }

    static create({ name, id, items }) {
        const list = new List(name, id)
        list.items = items.map(Item.create)
        return list
    }
  }

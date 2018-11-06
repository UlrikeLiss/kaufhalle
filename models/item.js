 module.exports = class Item { 
    constructor(name, count = 1,id) {
        this.name = name
        this.count = count
        this.id = id
    }

    addItemToList(list) {
        list.items.push(this)
    }

    static create({ name, count, id}) {
        return new Item(name, count,id)
    }
  }

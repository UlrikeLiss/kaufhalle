module.exports = class Item{
    constructor(name, count) {
        this.name = name
        this.count = count
    }
    addToList(list) {
        list.items.push(this)
    }
  }

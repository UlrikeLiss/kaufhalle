module.exports = class Item{
    constructor(name, count) {
        this.name = name
        this.count = count
    }
    add(list) {
        list.items.push(this)
    }
  }

module.exports = class Item{
    constructor(name, count) {
        this.name = name
        this.count = count
    }
    static create({ name, count }) {
        return new Item(name, count)
    }
  }

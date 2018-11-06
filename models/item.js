 module.exports = class Item { 
    constructor(name, count = 1,id) {
        this.name = name
        this.count = count
        this.id = id
    }

    static create({ name, count, id}) {
        return new Item(name, count,id)
    }
  }

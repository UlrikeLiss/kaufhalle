module.exports = class List {
    constructor(name) {
        this.name = name
        this.items = []
    }
    addItem(item) {
        this.items.push(item);
        }
        
    report() {
        console.log(this.name, this.items)
    }
    
    static create({ name, items }) {
        const list = new List(name)
        list.items = items.map(List.create)
        return list
    }
  }

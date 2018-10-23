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
  }

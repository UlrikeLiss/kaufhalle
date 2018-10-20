module.exports = class List {
    constructor(name) {
        this.name = name
        this.items = []
    }
    add(mainList) {
        mainList.lists.push(this)
    }
    report() {
        console.log(this.name, this.items)
    }
  }

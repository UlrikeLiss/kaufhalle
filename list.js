module.exports = class List {
    constructor(name) {
        this.name = name
        this.items = []
    }
    addToMainList(mainList) {
        mainList.lists.push(this)
    }
    report() {
        console.log(this.name, this.items)
    }
  }

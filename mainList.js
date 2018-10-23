module.exports = class MainList {
    constructor(name) {
        this.name = name
        this.lists = []
    }
    addList(list) {
        this.lists.push(list);
        }

    report() {
        console.log(this.name, this.lists, this.lists.length)
    }
  }

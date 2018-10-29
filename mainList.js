const List = require('./list')
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
    static create({ name, lists, items }) {
        const mainList = new MainList(name)
        mainList.lists = lists.map(MainList.create)
        list.items = items.map(List.create)
        return mainList
    }
  }

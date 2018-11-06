 const List = require('./list')
module.exports = class MainList {
      constructor(name, id) {
          this.name = name
          this.id = id
          this.lists = []
      }
  
      static create({ name,id,lists}) {
          const mainList = new MainList(name, id)
          mainList.lists = lists.map(List.create)
          return mainList
          
      }
      report() {
          console.log(this.name, this.id, this.lists, this.lists.length)
      }
    }
  
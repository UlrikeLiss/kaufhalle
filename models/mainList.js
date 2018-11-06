 const List = require('./list')
module.exports = class MainList {
      constructor(name, id) {
          this.name = name
          this.id = id
          this.lists = []
      }
  
      addListToMainList(mainList) {
        mainList.lists.push(this)
    }

      static create({ name,id,lists}) {
          const mainList = new MainList(name, id)
          mainList.lists = lists.map(List.create)
          return mainList
          
      }
    }
  
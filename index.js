const List = require('./list')
const Item = require('./item')
const MainList = require('./mainlist')
const Database = require('./database')

  const milk = new Item ('Milk', 2)
  const butter = new Item ('Butter', 1)
  const food = new List("Food")
  const ikea = new List("Ikea")
  const table = new Item('Table',1)
  const UliThomas = new MainList('Uli & Thomas')

  food.addItem(milk)
  food.addItem(butter)
  ikea.addItem(table)
  food.report()
  ikea.report()
  UliThomas.addList(ikea)
  UliThomas.addList(food)

// Save to DB

  async function saveFile() {
    const items = [milk,butter,table]
    await Database.save(items)
}
saveFile()

// Read from DB

async function loadFile() {
    const loadedItems = await Database.load('./data.json')
    const firstItem = Item.create(loadedItems[0])
    const secondItem = Item.create(loadedItems[1])
    const thirdItem = Item.create(loadedItems[2])
    console.log(firstItem)
    console.log(secondItem)
    console.log(thirdItem)
} 
loadFile()

const List = require('./list')
const Item = require('./item')
const MainList = require('./mainlist')
const Database = require('./database')

const main = async () => {

  const milk = new Item ('Milk', 2)
  const butter = new Item ('Butter', 1)
  const food = new List("Food")
  const ikea = new List("Ikea")
  const table = new Item('Table',1)
  const UliThomas = new MainList('Uli & Thomas')

  food.addItem(milk)
  food.addItem(butter)
  ikea.addItem(table)
  UliThomas.addList(ikea)
  UliThomas.addList(food)

// Save to DB

    const items = [butter,milk,table]
    await Database.save(items)

// Read from DB

    const loadedItems = await Database.load('./data.json')
    const firstItem = Item.create(loadedItems[0])
    const secondItem = Item.create(loadedItems[1])
    const thirdItem = Item.create(loadedItems[2])
    console.log(firstItem)
    console.log(secondItem)
    console.log(thirdItem)

// Save to DB

    const lists = [food,ikea]
    await Database.save(lists)

    // Read from DB
    const loadedLists = await Database.load('./data.json')
    const firstList = List.create(loadedLists[0])
    const secondList = List.create(loadedLists[1])
    console.log(firstList)
    console.log(secondList)
}

(async () => {
  try {
      await main()
  } catch (e) {
      console.log(e)
  }
})()

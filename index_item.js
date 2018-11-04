const express = require('express')
const bodyParser = require('body-parser')

const ItemService = require('./services/item-service')
const ListService = require('./services/list-service')
const MainListService = require('./services/mainList-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/item/all', async (req, res) => {
    const Products = await ItemService.load()
    res.render('item', { Products })
  })

  app.get('/item/:id', async (req, res) => {
    const article = await ItemService.find(req.params.id)
    res.send(article)
  })

  app.post('/item', async (req, res) => {
    const article = await ItemService.add(req.body)
    res.send(article)
  })

  app.delete('/item/:id', async (req, res) => {
    const article = await ItemService.del(req.params.id)
    res.send(article)
  })

  app.listen(3000, () => {
    console.log('Server listening')
  })

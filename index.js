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

app.get('/mainList/all', async (req, res) => {
    const MainRecords = await MainListService.load()
    res.render('mainList', { MainRecords })
  })

  app.get('/list/all', async (req, res) => {
    const Records = await ListService.load()
    res.render('list', { Records })
  })

  app.post('/list', async (req, res) => {
    const note = await ListService.add(req.body)
    res.send(note)
  })

  app.delete('/list/:id', async (req, res) => {
    const note = await ListService.del(req.params.id)
    res.send(note)
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

const express = require('express')
const bodyParser = require('body-parser')

require ('./database-connection')

const ItemService = require('./services/item-service')
const ListService = require('./services/list-service')
const MainListService = require('./services/mainList-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
  })

// mainList Endpoints

app.get('/mainList/all', async (req, res) => {
    const MainRecords = await MainListService.load()
    res.render('mainList', { MainRecords })
  })

  app.post('/mainList', async (req, res) => {
    const MainRecords = await MainListService.add(req.body)
    res.send(MainRecords)
  })

  app.delete('/mainList/:name', async (req, res) => {
    const MainRecords = await MainListService.deleteOne(req.params.name)
    res.send(MainRecords)
  })

  app.post('/mainList/createAndAddMainList/:name', async (req, res) => {
    const MainRecords = await MainListService.createAndAddListToMainList(req.params.name, req.body)
    res.send(MainRecords)
  })

  // List Endpoints

  app.get('/list/all', async (req, res) => {
    const Records = await ListService.load()
    res.render('list', { Records })
  })

  app.delete('/list/:name', async (req, res) => {
    const note = await ListService.deleteOne(req.params.name)
    res.send(note)
  })

  app.post('/list/createAndAddItem/:name', async (req, res) => {
    const note = await ListService.createAndAddItemToList(req.params.name, req.body)
    res.send(note)
  })

  app.post('/list/emptyList/:name', async (req, res) => {
    const note = await ListService.emptyList(req.params.name, req.body)
    res.send(note)
  })

  app.get('/list/:name', async (req, res) => {
    const list = await ListService.find(req.params.name)
    res.render('specificList', { list })
  })

  // Item Endpoints

  app.get('/item/all', async (req, res) => {
    const Products = await ItemService.load()
    res.render('item', { Products })
  })

  app.delete('/item/:name', async (req, res) => {
    const article = await ItemService.deleteOne(req.params.name)
    res.send(article)
  })

  app.listen(3000, () => {
    console.log('Server listening')
  })

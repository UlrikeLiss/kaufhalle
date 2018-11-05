const express = require('express')
const bodyParser = require('body-parser')

const ItemService = require('./services/item-service')
const ListService = require('./services/list-service')
const MainListService = require('./services/mainList-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send('Hello')
})

app.get('/mainList/all', async (req, res) => {
    const MainRecords = await MainListService.load()
    res.render('mainList', { MainRecords })
  })

  app.get('/mainList/:id', async (req, res) => {
    const collection = await MainListService.find(req.params.id)
    res.send(collection)
  })

  app.post('/mainList', async (req, res) => {
    const collection = await MainListService.add(req.body)
    res.send(collection)
  })

  app.post('/mainList', async (req, res) => {
    const collection = await MainListService.addList(req.body)
    res.send(collection)
  })

  app.delete('/mainList/:id', async (req, res) => {
    const collection = await MainListService.del(req.params.id)
    res.send(collection)
  })

  app.listen(3000, () => {
    console.log('Server listening')
  })

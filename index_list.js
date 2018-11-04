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

app.get('/list/all', async (req, res) => {
    const Records = await ListService.load()
    res.render('list', { Records })
  })

  app.get('/list/:id', async (req, res) => {
    const note = await ListService.find(req.params.id)
    res.send(note)
  })

  app.post('/list', async (req, res) => {
    const note = await ListService.add(req.body)
    res.send(note)
  })

  app.delete('/list/:id', async (req, res) => {
    const note = await ListService.del(req.params.id)
    res.send(note)
  })

  app.listen(3000, () => {
    console.log('Server listening')
  })

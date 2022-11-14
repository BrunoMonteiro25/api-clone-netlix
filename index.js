const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const routes = require('./src/routes/filmes.routes')
mongoose.connect('mongodb://127.0.0.1:27017/netflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', routes)

app.listen(3000, () => {
  console.log('Meu servidor está funcionando')
})

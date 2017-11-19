'use strict'

// Packages
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const api = require('./api/routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine(
  '.hbs',
  hbs({
    defaultLayout: 'default',
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login', (request, response) => {
  response.render('login')
})

app.get('/', (request, response) => {
  response.render('product')
})

module.exports = app

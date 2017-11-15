'use strict'

// Packages
const mongoose = require('mongoose')
const promise = require('bluebird')
const chalk = require('chalk')
const { port, db } = require('./config')
const app = require('./app')

const styleErr = chalk.white.bold

mongoose.Promise = promise

mongoose.connect(db, err => {
  if (err) return console.log(styleErr(`Apparently a problem occurred: ${err}`))

  console.log('> Connection to the established database c:')

  app.listen(port, err => {
    if (err)
      return console.log(styleErr(`Apparently a problem occurred: ${err}`))

    console.log(`> Ready On http://localhost:${port}/api`)
  })
})

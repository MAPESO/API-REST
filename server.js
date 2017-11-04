'use strict'

// Packages
const mongoose = require('mongoose')
const promise = require('bluebird')
const config = require('./config')
const app = require('./app')

mongoose.Promise = promise

mongoose.connect(config.db, err => {
    if(err) return console.log(`Apparently a problem occurred: ${err}`)

    console.log('> Connection to the established database c:')

    app.listen(config.port, err => {
        if(err) return console.log(`Apparently a problem occurred: ${err}`)
        
        console.log(`> Ready On http://localhost:${config.port}/api/product`)
    })
})


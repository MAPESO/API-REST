'use strict'

// Packages
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productShema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'games', 'sticker'] },
    description: String
})

module.exports = mongoose.model('Product', productShema)
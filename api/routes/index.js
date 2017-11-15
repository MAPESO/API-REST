'use strict'

// Packages
const express = require('express')
const {
  getProducts,
  getSingleProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
  works
} = require('../controllers/product')

const { signUp, signIn } = require('../controllers/user')

const isAuth = require('../middlewares/auth')

const router = express.Router()

router.get('/', works)

router.get('/product', getProducts)

router.get('/product/:productId', getSingleProduct)

router.post('/product', saveProduct)

router.put('/product/:productId', updateProduct)

router.delete('/product/:productId', deleteProduct)

router.post('/signUp', signUp)

router.post('/signIn', signIn)

router.get('/private', isAuth, (request, response) => {
  response.status(200).send('<h1>hooola</h1>')
})

module.exports = router

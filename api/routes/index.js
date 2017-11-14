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

const { isAuth } = require('../middlewares/auth')

const router = express.Router()

router.get('/', works)

router.get('/product', getProducts)

router.get('/product/:productId', getSingleProduct)

router.get('/private', isAuth, function(request, reponse) {
  response.status(200).send('<h1> Tienes acceso a la ruta :) </h1>')
})

router.post('/product', saveProduct)

router.put('/product/:productId', updateProduct)

router.delete('/product/:productId', deleteProduct)

module.exports = router

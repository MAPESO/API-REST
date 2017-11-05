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

const router = express.Router()

router.get('/', works)

router.get('/product', getProducts)
        
router.get('/product/:productId', getSingleProduct)
       
router.post('/product', saveProduct)
    
router.put('/product/:productId', updateProduct)
    
router.delete('/product/:productId', deleteProduct)

module.exports = router
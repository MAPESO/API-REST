'use strict'

// Packages
const express = require('express')
const productCtrl = require('../controllers/product')

const router = express.Router()

router.get('/product', productCtrl.getProduct)
        
router.get('/product/:productId', productCtrl.getProductId)
       
router.post('/product', productCtrl.saveProduct)
    
router.put('/product/:productId', (request, response) => {})
    
router.delete('/product/:productId', (request, response) => {})

module.exports = router
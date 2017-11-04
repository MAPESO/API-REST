'use strict'

// Packages
const Product = require('../models/product')

function getProductId(request, response) {
  let productId = request.params.productId
  
  Product.findById(productId, (err, product) => {
      if(err) return response.status(500).send({ message: `Error when saving in the database: ${err}` })
      if(!product) return response.status(404).send({ message: 'There is no product' })

      response.status(200).send({ product })
  })
}

function getProduct(request, response) {
  Product.find({}, (err, products) => {
     if(err) return response.status(500).send({ message: `Error when saving in the database: ${err}` })
     if(!products) return response.status(404).send({ message: `Error when saving in the database: ${err}`})

     response.status(200).send({
       products
     })
  })

}

function saveProduct(request, response) {
    console.log('POST/api/product')
    console.log(request.body)


    // Almacenando un producto en nustra base de datos
    const { name, picture, price, category, description } = request.body
    let product = new Product({
       name,
       picture,
       price,
       category,
       description
    })

    // Gurgando el producto en BS
    product.save((err, productStored) => {
      if(err) return response.status(500).send({ message: `Error when saving in the database: ${err}` })

      response.status(200).send({ 
        products: productStored,
        message: 'product saved :)' 
      })
    })
}


module.exports = {
  saveProduct,
  getProductId,
  getProduct
}
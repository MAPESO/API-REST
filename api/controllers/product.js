'use strict'

// Packages
const Product = require('../models/product')
const chalk = require('chalk')

function getSingleProduct(request, response) {
  const productId = request.params.productId

  Product.findById(productId, (err, product) => {
    if (err)
      return response
        .status(500)
        .send({ message: `Error ${err.code}: ${err.message}` })
    if (!product)
      return response.status(404).send({ message: 'There is no product' })

    response.status(200).send({ product })
  })
}

function getProducts(request, response) {
  Product.find({}, (err, products) => {
    if (err)
      return response
        .status(500)
        .send({ message: `Error ${err.code}: ${err.message}` })

    response.status(200).send({ products })
  })
}

function saveProduct(request, response) {
  console.log('POST/api/product')
  console.log(request.body)

  // Storing the product in our database
  const { name, picture, price, category, description } = request.body
  const product = new Product({
    name,
    picture,
    price,
    category,
    description
  })

  // Saving the product in the database
  product.save((err, productStored) => {
    if (err)
      return response
        .status(500)
        .send({ message: `Error ${err.code}: ${err.message}` })

    response.status(200).send({
      product: productStored,
      message: 'product saved :)'
    })
  })
}

function deleteProduct(request, response) {
  const productId = request.params.productId

  Product.findByIdAndRemove(productId, (err, product) => {
    if (err)
      return response
        .status(500)
        .send({ message: `Error ${err.code}: ${err.message}` })
    if (!product)
      return response.status(404).send({ message: 'There is no product' })

    response.status(200).send({ message: 'Product removed' })
  })
}

function updateProduct(request, response) {
  const productId = request.params.productId
  const update = request.body

  console.log(chalk.yellow.bold(request.body))

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err)
      return response
        .status(500)
        .send({ message: `Error ${err.code}: ${err.message}` })
    if (!productUpdated)
      return response
        .status(404)
        .send({ message: `No existe el producto ${productId}` })

    response.status(200).send({
      product: productUpdated,
      message: 'Updated product'
    })
  })
}

module.exports = {
  saveProduct,
  getSingleProduct,
  getProducts,
  deleteProduct,
  updateProduct
}

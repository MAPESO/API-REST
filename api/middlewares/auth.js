'use strict'

const { decodeToke } = require('../services')

function isAuth(request, response, next) {
  if (!request.headers.authorization) {
    return response.status(403).send({ message: 'No tienes acceso a esa ruta' })
  }

  const token = request.headers.authorization.split(' ')[1]

  decodeToke(token)
    .then(response => {
      request.user = response
      next()
    })
    .catch(response => {
      request.status(response.status)
    })
}

module.exports = isAuth

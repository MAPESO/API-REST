'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const { SECRET_TOKEN } = require('../config')

function isAuth(request, reponse, next) {
  if (!request.headers.authorization) {
    return response.status(403).send({ message: 'No tienes acceso a esa ruta' })
  }

  const token = request.headers.authorization.split(' ')[1]
  const payload = jwt.encode(token, SECRET_TOKEN)

  if (payload.exp <= moment().unix()) {
    return response.status(401).send({ message: 'El token a expirado' })
  }

  request.user = payload.sub
  next()
}

module.exports = {
  isAuth
}

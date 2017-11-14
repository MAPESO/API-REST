'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const { createToken } = require('../services')

function signUp(request, reponse) {
  const { email, displayName } = request.body
  const user = new User({
    email,
    displayName
  })

  mongoose.save(err => {
    if (err)
      return reponse
        .status(500)
        .send({ message: `Error al crear el usuario: ${err}` })

    reponse.status(200).send({ tooken: createToken(user) })
  })
}

function signIn(request, response) {
  const email = request.body.email
  User.find({ email }, (err, user) => {
    if (err)
      return reponse
        .status(500)
        .send({ message: `Error en el servidor: ${err}` })
    if (user === null)
      reponse.status(404).send({ message: 'No existe el usuario ' })

    response.status(200).send({ message: 'Te haz logeado correctamente ' })
  })
}

module.exports = {
  signUp,
  signIn
}

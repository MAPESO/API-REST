'use strict'

const User = require('../models/user')
const { createToken } = require('../services')

function signUp(request, reponse) {
  const { email, displayName, password } = request.body
  const user = new User({
    email,
    displayName,
    password
  })

  user.save(err => {
    if (err) {
      return reponse
        .status(500)
        .send({ message: `Error al crear el usuario: ${err}` })
    }

    reponse.status(201).send({ token: createToken(user) })
  })
}

function signIn(request, response) {
  const { email } = request.body
  User.find({ email }, (err, user) => {
    if (err) {
      return reponse
        .status(500)
        .send({ message: `Error en el servidor: ${err}` })
    }
    if (user === null) {
      return reponse.status(404).send({ message: 'No existe el usuario ' })
    }

    response.status(200).send({
      message: 'Te haz logeado correctamente',
      token: createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}

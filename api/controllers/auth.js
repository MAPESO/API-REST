'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp (request, reponse) {
    const { email, displayName } = request.body
    const user = new User({
        email,
        displayName
    })

    mongoose.save((err) => {
       if (err) return reponse.status(500).send({ message: `Error al crear el usuario: ${err}`})

       reponse.status(200).send({ tooken: service.createToken(user) })
    })

}

function signIn (request, response) {

}

module.exports = {
   signUp,
   signIn
}
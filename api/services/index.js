'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const { SECRET_TOKEN } = require('.../config')

function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, 'days')
      .unix()
  }
  return jwt.encode(payload, SECRET_TOKEN)
}

function decodeToke(token) {
  const decode = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 400,
          message: 'El toke expiro'
        })
        resolve(payload.sub)
      }
    } catch (err) {
      reject({
        status: 500,
        message: 'token invalido'
      })
    }
  })

  return decode
}

module.exports = {
  createToken,
  decodeToke
}

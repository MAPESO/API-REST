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

module.exports = {
  createTooken
}

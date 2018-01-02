'use strict'

const config = require('../../config')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out',
    method: 'DELETE',
    data
  })
}

const changePass = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-pass',
    method: 'PATCH',
    data
  })
}

module.exports = {
  create,
  signIn,
  signOut,
  changePass
}

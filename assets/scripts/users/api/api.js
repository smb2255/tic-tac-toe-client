'use strict'

const config = require('../../config')
// const store = require('../store')

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
    url: config.apiOrigin + `/sign-out/`,
    method: 'DELETE'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data
  })
}

const changePass = function (data) {
  return $.ajax({
    url: config.apiOrigin + `/change-password/`,
    method: 'PATCH'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data
  })
}

const gameIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + `/games`,
    method: 'POST',
    data
  })
}

module.exports = {
  create,
  signIn,
  signOut,
  changePass,
  gameIndex
}

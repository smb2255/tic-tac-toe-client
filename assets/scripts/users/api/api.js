'use strict'

const config = require('../../config')
const store = require('../../store.js')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePass = function (data) {
  // console.log('store user id is ', store.user.id)
  // console.log('store user token is ', store.user.token)
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getStats = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    }
  })
}

const updateGame = function (data) {
  console.log('store game id is ', store.game)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    },
    data
  })
}

const startGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getTotalGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  signIn,
  signOut,
  changePass,
  getStats,
  startGame,
  updateGame,
  getTotalGames
}

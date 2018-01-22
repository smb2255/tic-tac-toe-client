'use strict'
const store = require('./store')

const createUserSuccess = function () {
  $('#sign-up-msg').html(`<p> Sign up success! </p>`)
  $('#credentials_SU').hide()
}

const createUserFailure = function () {
  $('#user-msg').html(`<p>Sign-up failed!</p>`)
}
const signInSuccess = function (response) {
  store.user = response.user
  // console.log(store.user.token)
  $('#sign-up-msg').html(`<p>You have signed in!</p>`)
  $('#credentials_SI').hide()
  $('#start-button').show()
  $('#change-pass-msg').show()
  $('#sign-out-msg').show()
}

const signInFailure = function () {
  $('#user-msg').html(`<p>Sign-in failed!</p>`)
}

const signOutSuccess = function () {
  store.user = null
  $('#sign-out-msg').html(`<p>Sign-out success!</p>`)
  $('#start-button').hide()
  $('#change-pass-msg').hide()
}

const signOutFailure = function () {
  $('#sign-out-msg').html(`<p>Sign-out failed!</p>`)
}

const changePassSuccess = function () {
  $('#change-pass-msg').html('<p> You have changed your password </p>')
}

const changePassFailure = function () {
  $('#change-pass-msg').html('<p> You have not changed your password </p>')
}

const startGameSuccess = function (data) {
  store.games = data
  $('#sign-up-msg').html('<p>Game has begun! </p>')
  $('#Tic-Tac-Toe').show()
  $('#stats-button').show()
  $('#reset-button').show()
  $('#start-button').hide()
  $('#sign-up').hide()
  // console.log('that worked')
}

const startGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  store.games = data
  // console.log('successfully updated game')
}

const updateGameFailure = function (error) {
  console.error(error)
}

const getStatsSuccess = function (data) {
  store.stats = data
  $('#stats-button').text('You have played' + ' ' + store.stats.games.length + ' ' + 'games')
}

const getStatsFailure = function (error) {
  console.error(error)
}

module.exports = {
  createUserSuccess,
  createUserFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePassSuccess,
  changePassFailure,
  startGameFailure,
  startGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess,
  getStatsFailure
}

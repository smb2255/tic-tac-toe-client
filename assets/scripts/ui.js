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
  console.log(store.user.token)
  $('#sign-in-msg').html(`<p>You have signed in!</p>`)
  $('#credentials_SI').hide()
  $('#start-button').show()

  // store.user = data.user
}

const signInFailure = function () {
  $('#user-msg').html(`<p>Sign-in failed!</p>`)
}

const signOutSuccess = function () {
  store.user = null
  $('#sign-out-msg').html(`<p>Sign-out success!</p>`)
}

const signOutFailure = function () {
  $('#sign-out-msg').html(`<p>Sign-out failed!</p>`)
}

const changePassSuccess = function () {
  $('#change-pass-msg').html('<p> you have changed your password </p>')
}

const changePassFailure = function () {
  $('#change-pass-msg').html('<p> you have not changed your password </p>')
}

const startGameSuccess = function (data) {
  store.games = data
  $('#Tic-Tac-Toe').show()
  console.log('that worked')
}

const startGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  store.games = data
  console.log('successfully updated game')
}

const updateGameFailure = function (error) {
  console.error(error)
}

const checkWin = function (token) {
  let score = 0
  for (let i = 0; i < store.games.length; i++) {
    if ((store.games[i].cells[0] === token && store.games[i].cells[1] === token && store.games[i].cells[2] === token) || (store.games[i].cells[3] === token && store.games[i].cells[4] === token && store.games[i].cells[5] === token) || (store.games[i].cells[6] === token && store.games[i].cells[7] === token && store.games[i].cells[8] === token) || (store.games[i].cells[0] === token && store.games[i].cells[3] === token && store.games[i].cells[6] === token) || (store.games[i].cells[1] === token && store.games[i].cells[4] === token && store.games[i].cells[7] === token) || (store.games[i].cells[2] === token && store.games[i].cells[5] === token && store.games[i].cells[8] === token) || (store.games[i].cells[0] === token && store.games[i].cells[4] === token && store.games[i].cells[8] === token) || (store.games[i].cells[2] === token && store.games[i].cells[4] === token && store.games[i].cells[6] === token)) {
      score++
    }
  }
  return score
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
  checkWin,
  startGameFailure,
  startGameSuccess,
  updateGameSuccess,
  updateGameFailure
}

'use strict'
const store = require('./store')

const signUpSuccess = function () {
  $('#sign-up-msg').show()
}

const signUpFailure = function () {
  $('#user-msg').html(`<p>Sign-up failed!</p>`)
}
const signInSuccess = function (response) {
  store.user = response.user
  console.log(store.user.token)
  $('#Tic-Tac-Toe').show()
  $('#sign-in-msg').html(`<p>You have signed in!</p>`)
  // store.user = data.user
}
// $('#gameboard').show

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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  checkWin
}

'use strict'

const signUpSuccess = function () {
  $('#sign-up-msg').html(`<p>You have signed up!</p>`)
}

const signUpFailure = function () {
  $('#user-msg').html(`<p>Sign-up failed!</p>`)
}
const signInSuccess = function () {
  $('#sign-in-msg').html(`<p>You have signed in!</p>`)
  $('#Tic-Tac-Toe').html(`<tr> </tr>`)
  return false
}
// $('#gameboard').show

const signInFailure = function () {
  $('#user-msg').html(`<p>Sign-in failed!</p>`)
}

const signOutSuccess = function () {
  $('#sign-out-msg').html(`<p>Sign-in success!</p>`)
}

const signOutFailure = function () {
  $('#sign-out-msg').html(`<p>Sign-out failed!</p>`)
}

const createUserSuccess = function () {
}

const createUserFailure = function () {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createUserSuccess,
  createUserFailure
}

'use strict'

// sign in success sign up, failue, reference functions in events/oncreate user function
// UI sign in success: just make an html element using jquery that says YAY
// UI sign in failure: just make an html element using jquery that says NAY

const signUpSuccess = function () {
  $('#user-msg').html(`<p>Yay!</p>`)
}

const signUpFailure = function () {
  $('#user-msg').html(`<p>Nay!</p>`)
}
const signInSuccess = function () {
  $('#user-msg').html(`<p>Yay!</p>`)
}

const signInFailure = function () {
  $('#user-msg').html(`<p>Nay!</p>`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}

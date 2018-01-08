'use strict'
const store = require('..store')

const signUpSuccess = function (data) {
  $('#sign-up-msg').html('You have signed up!')
  $('#sign-up-msg').css('color', '#008B8B')
  $('#sign-up-msg').css('background', '#DEB887')
  $('#sign-up-msg').css('width', 'fit-content')
  $('#sign-up-msg').css('margin', '0 auto')
  store.user = data.user
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signUpFailure = function () {
  $('#sign-up-msg').html('Sign-up failed!')
  $('#sign-up-msg').css('color', '#BA55D3')
  $('#sign-up-msg').css('background', '#DEB887')
  $('#sign-up-msg').css('width', 'fit-content')
  $('#sign-up-msg').css('margin', '0 auto')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccess = function (data) {
  $('#sign-in-msg').html('You have signed in!')
  $('#sign-in-msg').css('color', '#FF1493')
  $('#sign-in-msg').css('background', '#DEB887')
  $('#sign-in-msg').css('width', 'fit-content')
  $('#sign-in-msg').css('margin', '0 auto')
  store.user = data.user
  $('#sign-out').each(function () {
    this.reset()
  })
}

const signInFailure = function () {
  $('#sign-in-msg').html('Sign-in failed!')
  $('#sign-in-msg').css('color', '#191970')
  $('#sign-in-msg').css('background', '#DEB887')
  $('#sign-in-msg').css('width', 'fit-content')
  $('#sign-in-msg').css('margin', '0 auto')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const signOutSuccess = function (data) {
  store.user = null
  $('#sign-out-msg').html('Sign-in success!')
  $('#sign-out-msg').css('color', '#7FFF00')
  $('#sign-out-msg').css('background', '#DEB887')
  $('#sign-out-msg').css('width', 'fit-content')
  $('#sign-out-msg').css('margin', '0 auto')
}

const signOutFailure = function () {
  $('#sign-out-msg').html('Sign-out failed!')
  $('#sign-out-msg').css('color', '#0000FF')
  $('#sign-out-msg').css('background', '#DEB887')
  $('#sign-out-msg').css('width', 'fit-content')
  $('#sign-out-msg').css('margin', '0 auto')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}

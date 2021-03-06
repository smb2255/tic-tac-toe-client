'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./users/api/api')
// const config = require('./config')
const ui = require('./ui')
// const store = require('./store')

let gameArray = []
let turnCount
let currentPlayer

const createGame = function () {
  gameArray = ['', '', '', '', '', '', '', '', '']
  turnCount = 0
  currentPlayer = 'X'
}

const resetGameBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).html('')
    $('#turn-message').text(' ')
    $('#space-taken').hide()
    $('#x-winner').hide()
    $('#o-winner').hide()
    $('#new-game').hide()
  }
}
const resetGame = function (event) {
  createGame()
  resetGameBoard()
}

const player = function (boxNum) {
  // console.log('boxnum is', boxNum)
  if (turnCount % 2 === 0) {
    // console.log('even')
    currentPlayer = 'X'
    $('#turn-message').text(`current turn is O`)
    const boxId = '#' + boxNum
    $(boxId).text('X')
    turnCount++
    gameArray[boxNum] = 'x'
    // console.log('this works', gameArray)
  } else {
    // console.log('odd')
    currentPlayer = '0'
    $('#turn-message').text(`current turn is X`)
    const boxId = '#' + boxNum
    $(boxId).text('O')
    turnCount++
    gameArray[boxNum] = 'o'
    // console.log('this works', gameArray)
  }
}

const onCreateUser = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log(config.apiOrigin)
  api.create(data)
    .then(ui.createUserSuccess)
    .catch(ui.createUserFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log(config.apiOrigin)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // event.preventDefault()
  gameArray = ['', '', '', '', '', '', '', '', '']
  $('#0').text('')
  $('#1').text('')
  $('#2').text('')
  $('#3').text('')
  $('#4').text('')
  $('#5').text('')
  $('#6').text('')
  $('#7').text('')
  $('#8').text('')
  onCreateUser()
  onSignIn()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePass = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('worked', data)
  // console.log(config.apiOrigin)
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}

const startGame = function (event) {
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onGameIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log(config.apiOrigin)
  api.gameIndex(data)
}

const addHandlers = function () {
  const boxClick = function (event) {
    event.preventDefault()
    // console.log(this.id)
    // console.log(turnCount)
    const boxNum = this.id
    if (gameArray[boxNum] !== '') {
      // console.log('ALREADY SELECTED, CHOOSE ANOTHER SPACE')
      $('#space-taken').show()
    } else {
      player(boxNum)
      // console.log(checkWinner())
      if ((checkWinner()) && !(turnCount % 2 === 0)) {
        $('#x-winner').show()
        $('#new-game').show()
        $('#turn-message').hide()
        onUpdateGame()
      } else if (checkWinner()) {
        $('#o-winner').show()
        $('#new-game').show()
        $('#turn-message').hide()
        onUpdateGame()
      }
    }
  }

  $('#0').on('click', boxClick)
  $('#1').on('click', boxClick)
  $('#2').on('click', boxClick)
  $('#3').on('click', boxClick)
  $('#4').on('click', boxClick)
  $('#5').on('click', boxClick)
  $('#6').on('click', boxClick)
  $('#7').on('click', boxClick)
  $('#8').on('click', boxClick)
  $('#start-button').on('click', startGame)
  $('#sign-up').on('submit', onCreateUser)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-pass').on('submit', onChangePass)
  $('#Tic-Tac-Toe').on('submit', onSignIn)
  $('#reset-button').on('click', resetGame)
  $('#turn-message').on('click', player)
  $('#full-message').on('click', boardFull)
  $('#stats-button').on('click', onGetStats)

  return false
}

const checkWinner = function () {
  if ((gameArray[0] === gameArray[1]) && (gameArray[0] && gameArray[2]) && (gameArray[0] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[3] === gameArray[4]) && (gameArray[3] && gameArray[5]) && (gameArray[3] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[6] === gameArray[7]) && (gameArray[6] && gameArray[8]) && (gameArray[6] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[0] === gameArray[3]) && (gameArray[0] && gameArray[6]) && (gameArray[0] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[1] === gameArray[4]) && (gameArray[1] && gameArray[7]) && (gameArray[1] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[2] === gameArray[5]) && (gameArray[2] && gameArray[8]) && (gameArray[2] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[0] === gameArray[4]) && (gameArray[0] && gameArray[8]) && (gameArray[0] !== '')) {
    // console.log('this works')
    return true
  } else if
  ((gameArray[2] === gameArray[4]) && (gameArray[2] && gameArray[6]) && (gameArray[2] !== '')) {
    // console.log('this works')
    return true
  } else {
    return false
  }
}

const boardFull = function (gameArray) {
  for (let i = 0; i <= gameArray.length; i++) {
    if (gameArray[i] === '') {
      $('#full-message').show()
    }
  }
}

const onGetStats = function (event) {
  event.preventDefault()
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

const onUpdateGame = function (event) {
  if ((checkWinner() === true) || (boardFull(gameArray) === true)) {
  }
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  addHandlers,
  currentPlayer,
  player,
  checkWinner,
  onCreateUser,
  onSignIn,
  onSignOut,
  createGame,
  resetGame,
  onGameIndex,
  boardFull,
  startGame,
  onUpdateGame,
  onGetStats
}

'use strict'
// const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const userApi = require('./users/api/api')
const config = require('./config')
const ui = require('./ui')
// const store = require('.store')

let gameArray = []
let turnCount
let currentPlayer

// let showBoard = false
const createGame = function () {
  gameArray = ['', '', '', '', '', '', '', '', '']
  turnCount = 0
  currentPlayer = 'X'
}

const resetGameBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).html('')
  }
}
const resetGame = function () {
  createGame()
  resetGameBoard()
}

const player = function (boxNum) {
  console.log('boxnum is', boxNum)
  if (turnCount % 2 === 0) {
    console.log('even')
    currentPlayer = 'X'
    const boxId = '#' + boxNum
    $(boxId).text('X')
    turnCount++
    gameArray[boxNum] = 'x'
    console.log('this works', gameArray)
  } else {
    console.log('odd')
    currentPlayer = '0'
    const boxId = '#' + boxNum
    $(boxId).text('O')
    turnCount++
    gameArray[boxNum] = 'o'
    console.log('this works', gameArray)
  }
}

const onCreateUser = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(config.apiOrigin)
  userApi.create(data)
    .then(ui.createUserSuccess)
    .catch(ui.createUserFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const showBoard = true
  console.log(data)
  console.log(config.apiOrigin)
  userApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// const onShowBoard = function () {
// $('#Tic-Tac-Toe').showBoard()
// }

const onSignOut = function (event) {
  event.preventDefault()
  // gameArray = ['', '', '', '', '', '', '', '', '']
  // $('#0').text('')
  // $('#1').text('')
  // $('#2').text('')
  // $('#3').text('')
  // $('#4').text('')
  // $('#5').text('')
  // $('#6').text('')
  // $('#7').text('')
  // $('#8').text('')
  userApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePass = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('worked', data)
  console.log(config.apiOrigin)
  userApi.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}

const onGameIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(config.apiOrigin)
  userApi.gameIndex(data)
}

const addHandlers = function () {
  const someFunction = function (event) {
    event.preventDefault()
    console.log(this.id)
    console.log('i am the turn', turnCount)
    const boxNum = this.id
    if (gameArray[boxNum] !== '') {
      console.log('ALREADY SELECTED, CHOOSE ANOTHER SPACE')
      $('#space-taken').show()
    } else {
      player(boxNum)
      console.log(checkWinner())
      if ((checkWinner()) && !(turnCount % 2 === 0)) {
        $('#x-winner').show()
        $('#new-game').show()
      } else if (checkWinner()) {
        $('#o-winner').show()
        $('#new-game').show()
      }
    }
  }

  $('#0').on('click', someFunction)
  $('#1').on('click', someFunction)
  $('#2').on('click', someFunction)
  $('#3').on('click', someFunction)
  $('#4').on('click', someFunction)
  $('#5').on('click', someFunction)
  $('#6').on('click', someFunction)
  $('#7').on('click', someFunction)
  $('#8').on('click', someFunction)
  $('#sign-up').on('submit', onCreateUser)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-pass').on('submit', onChangePass)
  $('#Tic-Tac-Toe').on('submit', onSignIn)
  $('#start-button').on('click', resetGame)
  return false
  // $('#start-button').on('click', resetGame)
  // $('#Tic-Tac-Toe').on('submit', onSignIn)
}

const checkWinner = function () {
  if ((gameArray[0] === gameArray[1]) && (gameArray[0] && gameArray[2]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[3] === gameArray[4]) && (gameArray[3] && gameArray[5]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[6] === gameArray[7]) && (gameArray[6] && gameArray[8]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[0] === gameArray[3]) && (gameArray[0] && gameArray[6]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[1] === gameArray[4]) && (gameArray[1] && gameArray[7]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[2] === gameArray[5]) && (gameArray[2] && gameArray[8]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[0] === gameArray[4]) && (gameArray[0] && gameArray[8]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[6] === gameArray[4]) && (gameArray[6] && gameArray[2]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else {
    return false
  }
}

// write a 'reset game' function
// const resetGame = function () {
//   game.gameArray = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
//   game.playerXturn = true
//   game.gameOver = false
// }

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
  onGameIndex
  // onShowBoard
}

'use strict'
// const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const userApi = require('./users/api/api')
const config = require('./config')
const ui = require('./ui')

let gameArray = []
let turnCount
let currentPlayer

const createGame = function () {
  gameArray = ['', '', '', '', '', '', '', '', '']
  turnCount = 0
  currentPlayer = 'X'
}

const resetGameBoard = function () {
  for (let i = 0; i < 8; i++) {
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
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePass = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
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
  $('#start-button').on('click', resetGame)
}

// $('#Tic-Tac-Toe').click(function (event) {
//   if (event.target.innerText !== '') {
//     console.log('ALREADY SELECTED, CHOOSE ANOTHER SPACE')
//     $('#space-taken').show()
//   } else {
//     $(event.target).text(currentPlayer)
//     checkWinner()
//     player()
//     // checkDraw()
//   }
// })
// $('#Tic-Tac-Toe').click(function () {
//   $('#space-taken').hide()
// })
//
// $('#Tic-Tac-Toe').click(function () {
//   $('#space-taken').show()
// })

const checkWinner = function () {
  if ((gameArray[0] === gameArray[1]) && (gameArray[0] && gameArray[2]) && (gameArray[0] !== '')) {
    console.log('this works')
    return true
  } else if
  ((gameArray[3] === gameArray[4]) && (gameArray[3] && gameArray[5]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[6] === gameArray[7]) && (gameArray[6] && gameArray[8]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[0] === gameArray[3]) && (gameArray[0] && gameArray[6]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[1] === gameArray[4]) && (gameArray[1] && gameArray[7]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[2] === gameArray[5]) && (gameArray[2] && gameArray[8]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[0] === gameArray[4]) && (gameArray[0] && gameArray[8]) && (gameArray[0] !== '')) {
    return true
  } else if
  ((gameArray[6] === gameArray[4]) && (gameArray[6] && gameArray[2]) && (gameArray[0] !== '')) {
    return true
  }
}

// write a 'reset game' function
// const resetGame = function () {
//   game.gameArray = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
//   game.playerXturn = true
//   game.gameOver = false
// }

// need to log if game = 0,1,2 win= true, if else = false
// next I need to be able to make sure the turns are stored in an array and see if the stored sequences match a winning sequence.
// var winConditions = {
// return winner(0,1,2)
// return winner(3,4,5)
// return winner(6,7,8)
// return winner(0,3,6)
// return winner(1,4,7)
// return winner(2,5,8)
// return winner(0,4,8)
// return winner(6,4,2)
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
  resetGame
}

const store = require('./store')
const gameArray = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let currentPlayer = ''

const player = function (boxNum) {
  console.log('I know what boxnum is, it is', boxNum)
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
const addHandlers = function () {
  const someFunction = function (event) {
    event.preventDefault()
    console.log(this.id)
    console.log('i am the turn', turnCount)
    const boxNum = this.id
    player(boxNum)
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
  // const cellIndex = $(event.target).attr('id')
  // console.log(cellIndex)
  // console.log('look at me I am cell index', cellIndex)
  // store.game.cells[cellIndex] = 'x'
  // console.log(store)
  // console.log(store.game.cells)
  // turnCount = turnCount + 1
}

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
  checkWinner
}

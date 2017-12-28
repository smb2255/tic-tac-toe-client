const store = require('./store')

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
  } else {
    console.log('odd')
    currentPlayer = '0'
    const boxId = '#' + boxNum
    $(boxId).text('O')
    turnCount++
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
  // $('#Tic-Tac-Toe td').on('click', someFunction)
  $('#0').on('click', someFunction)
  $('#1').on('click', someFunction)
  $('#2').on('click', someFunction)
  $('#3').on('click', someFunction)
  $('#4').on('click', someFunction)
  $('#5').on('click', someFunction)
  $('#6').on('click', someFunction)
  $('#7').on('click', someFunction)
  $('#8').on('click', someFunction)
  const cellIndex = $(event.target).attr('id')
  console.log('look at me I am cell index', cellIndex)
  store.game.cells[cellIndex] = 'x'
  console.log(store.game.cells)
  turnCount = turnCount + 1
}

const gameArray = ['', '', '', '', '', '', ]

//
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
  player
}

const store = require('./store')

let turnCount = 0
let currentPlayer = ''

const addHandlers = function () {
  const someFunction = function (event) {
    event.preventDefault()
    console.log(turnCount)
  }
  $('#Tic-Tac-Toe td').on('click', someFunction)
  const cellIndex = $(event.target).attr('id')
  store.game.cells[cellIndex] = 'x'
  console.log(store.game.cells)
  turnCount = turnCount + 1
}
const player = function () {
  if (turnCount % 2 === 0) {
    console.log('even')
    currentPlayer = 'x'
  } else {
    console.log('odd')
    currentPlayer = '0'
  }
}
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

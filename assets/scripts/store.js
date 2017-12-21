'use strict'

const store = {
}

module.exports = store
//what variables will I need for the functions?
const numberOfPlayers = 2
const currentPlayer = 0
const move = 0 // n= 1-9 (9 total moves to complete the game -at a draw- unless a player wins first. )
const playerXMoves = new Array () // record the numbers that correspond with each move a player makes
const playerOMoves = new Array ()//same as above
const winners = new Array ()
function winners ()
{
  winners.push([0, 1, 2])
  winners.push([3, 4, 5])
  winners.push([6, 7, 8])
  winners.push([0, 3, 6])
  winners.push([1, 4, 7])
  winners.push([2, 5, 8])
  winners.push([6, 4, 2])
  winners.push([0, 4, 8])
}

//each square of the tic-tac-toe board
const sq0 = $('#square0');
const sq1 = $('square1');
const sq2 = $('square2');
const sq3 = $('square3');
const sq4 = $('square4');
const sq5 = $('square5');
const sq6 = $('square6');
const sq7 = $('square7');
const sq8 = $('square8')

//win response

win = true;
if player == "X"

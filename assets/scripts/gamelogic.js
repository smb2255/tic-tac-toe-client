'use strict'
const testFunction = function () {
  console.log('testfunctionran')
}
// what variables will I need for the functions?
// //const numberOfPlayers = 2
// const currentPlayer = 0
// const move = 0 // n= 1-9 (9 total moves to complete the game -at a draw- unless a player wins first. )
// const playerXMoves = new Array () // record the numbers that correspond with each move a player makes
// const playerOMoves = new Array ()//same as above
// const winners = new Array ()
// function winners ()
// {
//   winners.push([0, 1, 2])
//   winners.push([3, 4, 5])
//   winners.push([6, 7, 8])
//   winners.push([0, 3, 6])
//   winners.push([1, 4, 7])
//   winners.push([2, 5, 8])
//   winners.push([6, 4, 2])
//   winners.push([0, 4, 8])
// }
//
// //each square of the tic-tac-toe board
// const sq0 = $('#square0');
// const sq1 = $('square1');
// const sq2 = $('square2');
// const sq3 = $('square3');
// const sq4 = $('square4');
// const sq5 = $('square5');
// const sq6 = $('square6');
// const sq7 = $('square7');
// const sq8 = $('square8')
//
// //win response
//
// win = true;
// if player == "X"

// counter function
// if that numher is odd, it's x's turn; turn increases by oNE
// if that number is even, it's o's turn; turn increases by one

// need to be able to log each move, so that you can have move switch player, move.
// to do that I need a function the records a move, saves it under an array correnponding to one player
// change turn- if X change to O if O change to X - only after that player has made thier move
// how do I get the code to run in a sequence so that the "next turns comes up after the player has made their move of choice?"...do I need an event listener for this...listening after 'click'
// how do I make a counter function that logs the turns and if odd then it's X turn, if even then O
// counter variable starting with

// marker = playerTurn(turnCount) // note: u prob gotta define the variable marker previously
// turnCount = turnCount + 1

//  turn counter function
// // function playerTurn (turncount) {
//   var player;
//       console.log("Entered function playerturn", turncount)
//       if (turncount % 2 === 0) {
//         console.log("Even")
//       player = 'X';
//     } else {
//         console.log("Odd")
//         player = 'O'
//       }
//       console.log("playerTurn is returning", player)
//       return(player)
//     }

module.exports = {
  testFunction: testFunction
  // testFunction - shorthand for above line

}

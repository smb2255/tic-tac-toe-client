const store = require('./store')
let turnCount = 0

const addHandlers = function () {
  $('#Tic-Tac-Toe td').on('click', function (event) {
    event.preventDefault()
    console.log(turnCount)

    const cellIndex = $(event.target).attr('id')
    store.game.cells[cellIndex] = 'x'
    console.log(store.game.cells)

    turnCount = turnCount + 1
  })
}



module.exports = {
  // add function name
  addHandlers
}

//counter function
//if that numher is odd, it's x's turn; turn increases by oNE
// if that number is even, it's o's turn; turn increases by one

// need to be able to log each move, so that you can have move switch player, move.
// to do that I need a function the records a move, saves it under an array correnponding to one player
// change turn- if X change to O if O change to X - only after that player has made thier move
// how do I get the code to run in a sequence so that the "next turns comes up after the player has made their move of choice?"...do I need an event listener for this...listening after 'click'
//how do I make a counter function that logs the turns and if odd then it's X turn, if even then O


  //counter variable starting with 0

'use strict'

const store = {
  'game': {
    'cells': ['', '', '', '', '', '', '', '', ''],
    'over': false
  }
}
const gameArray = {
  turn: 'o',
  currentGame: ['', '', '', '', '', '', '', '', ''],
  win: false
}

module.exports = {
  store,
  gameArray
}

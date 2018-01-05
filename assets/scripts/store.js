'use strict'

const store = {
  'game': {
    'cells': ['', '', '', '', '', '', '', '', ''],
    'over': false
  // },
  //   "player_x": {
  //       "id": 1,
  //       "email": " "
  //     },
  //     "player_o": {
  //       "id": 3,
  //       "email": " "
  //     }
  //   },
const gameArray = {
  turn: 'o',
  currentGame: ['', '', '', '', '', '', '', '', ''],
  win: false
}

module.exports = {
  store,
  gameArray
}

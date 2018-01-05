'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const gameLogic = require('./gamelogic')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
  events.createGame()
  gameLogic.testFunction()
})

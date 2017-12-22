const addHandlers = function () {
  $('#Tic-Tac-Toe td').on('click', function (event) {
    event.preventDefault()
    const cellIndex = $(event.target).attr('id')
    console.log(cellIndex)
  })
}

module.exports = {
  // add function name
  addHandlers
}

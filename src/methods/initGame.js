const GameEvents = require('../structures/GameEvents')
const mixPlayers = require('../functions/mixPlayers')

function initGame(options) {
  let {
    players,
    board,
    records,
    rules,
  } = options

  const turns = mixPlayers(players);
  console.log(turns)
}

module.exports = initGame;
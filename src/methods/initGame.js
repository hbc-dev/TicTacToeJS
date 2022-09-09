const GameEvents = require('../structures/GameEvents')

function initGame(options) {
  let {
    players,
    board,
    records,
    rules,
  } = options

  return new GameEvents();
}

module.exports = initGame;
const GameEvents = require('../structures/GameEvents.js')

/**
 * Init a new game with individual options
 * @param {Object} options The individual options
 */
module.exports = (options) => {
  let {
    players,
    board,
    records,
    rules,
  } = options

  return new GameEvents();
}
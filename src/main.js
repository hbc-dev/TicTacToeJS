const resolveBoard = require('./functions/resolveBoard.js')
const resolveRecords = require('./functions/resolveRecords.js')

let gameOptions = {
    defaultBoard: 'default',
    defaultRecords:  'default',
    registerGames: true,
    defaultRules: {}
}

/**
 * The game initializer
 */
class Game {
  /**
   * @param {Object} options The game options
   * @param {string|Object<string, number>} options.defaultBoard The default board dimesions
   * @param {string|Array<string>} options.defaultRecords The default users records to play
   * @param {boolean} options.registerGames Register games with id
   * @param {Object} options.defaultRules The default rules for all games
   *
   *
   * @param {boolean|string} options.defaultRules.maxMovements The max of movements
   */
  constructor(options = {}) {
    let {
        defaultBoard,
        defaultRecords,
        registerGames,
        defaultRules
    } = Object.assign(gameOptions, options);

    this.board = resolveBoard(defaultBoard);
    this.records = resolveRecords(defaultRecords);
    this.registerGames = registerGames;
    //this.defaultRules = resolveRules(defaultRules);
  }

  getBoard() {
    require('./methods/test')(this)
  }
}

module.exports = {Game};
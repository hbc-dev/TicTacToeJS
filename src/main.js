// # FUNCTIONS
const resolveBoard = require('./functions/resolveBoard.js')
const resolveRecords = require('./functions/resolveRecords.js')
const resolveRules = require('./functions/resolveRules.js')
const resolveGameOptions = require('./functions/resolveGameOptions.js')

// # METHODS
const initGame = require('./methods/initGame.js');

// # STRUCTURES
const GameEvents  = require(`./structures/GameEvents.js`)

// # UTILS
const gameError = require('./utils/gameError.js');

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
  // #PRIVATE
  #games;

  /**
   * @param {Object} options The game options
   * @param {Object<string, number>|string} options.defaultBoard The default board dimesions
   * @param {string|Array<string>} options.defaultRecords The default users records to play
   * @param {boolean} options.registerGames Register games with id
   * @param {Object} options.defaultRules The default rules for all games
   *
   * @param {number} options.defaultRules.maxMovements The max of movements per player
   * @param {number} options.defaultRules.maxGames The max of games per instance
   * @param {number} options.defaultRules.maxPlayers The max of players that can enter in game
   *
   * @param {number} options.defaultBoard.anc The width of the board
   * @param {number} options.defaultBoard.alt The height of the board
   */
  constructor(options = {}) {
    let { defaultBoard, defaultRecords, registerGames, defaultRules } =
      Object.assign(gameOptions, options);

    this.board = resolveBoard(defaultBoard);
    this.records = resolveRecords(defaultRecords);
    this.rules = resolveRules(defaultRules);

    this.#games = registerGames ? new Map() : { startedGames: 0 };
  }

  /**
   * Init a game with options
   * @param {Object} options The game options
   * @param {Array<number>} options.players The players id
   * @param {Object<string, number>|string} options.board The board dimesions
   * @param {string|Array<string>} options.records The users records to play
   * @param {Object} options.rules The rules for the games
   *
   * @param {number} options.rules.maxMovements The max of movements
   * @param {number} options.rules.maxGames The max of games per instance
   * @param {number} options.rules.maxPlayers The max of players that can enter in game
   *
   * @param {number} options.board.anc The width of the board
   * @param {number} options.board.alt The height of the board
   */
  initGame(options = {}) {
    if (typeof options !== "object" || Array.isArray(options))
      throw new gameError(
        `Se esperaba un objeto y se ha obtenido ${typeof options}.`
      );
    
    let resolvedOptions = resolveGameOptions(this, options);
    
    return initGame(resolvedOptions)
  }

  /**
   * Get a Map with all games
   * @returns {Map|string}
   */
  getGames() {
    return this.#games;
  }

  /**
   * @param {boolean} boolean Enable or disble the register of games
   */
  registerGames(boolean) {
    let games = this.#games;

    if (!(games instanceof Map) && boolean) this.#games = new Map();
    else if (games instanceof Map && !boolean)
      this.#games = { startedGames: games.size };
  }
}

module.exports = {Game};
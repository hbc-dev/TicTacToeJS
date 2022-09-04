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
 * All records prubuild
 * @typedef {"default"|"hearts"|"people"|"things"|"tools"|"weapons"} RecordsTypes
 */

/**
 * @typedef {"default"|"3x3"|"4x4"} boardStringTypes
 * @typedef {Object} boardObjectTypes
 * @property {number} anc The width of the board
 * @property {number} alt The height of the board
 */

/**
 * @typedef {Object} RulesTypes
 * @property {number} maxMovements The max of movements per player
 * @property {number} maxGames The max of games per instance
 * @property {number} maxPlayers The max of players that can enter in game
 */

/**
 * The game initializer
 */
class Game {
  // #PRIVATE
  #games;

  /**
   * @param {Object} options The game options
   * @param {boardObjectTypes|boardStringTypes} options.defaultBoard The default board dimesions
   * @param {RecordsTypes|Array<string>} options.defaultRecords The default users records to play
   * @param {RulesTypes} options.defaultRules The default rules for all games
   * @param {boolean} options.registerGames Register games with id
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
   * @param {boardObjectTypes|boardStringTypes} options.board The board dimesions
   * @param {RulesTypes} options.rules The rules for the games
   * @param {RecordsTypes|Array<string>} options.records The users records to play
   */
  initGame(options = {}) {
    if (typeof options !== "object" || Array.isArray(options))
      throw new gameError(
        `Se esperaba un objeto y se ha obtenido ${typeof options}.`
      );

    let resolvedOptions = resolveGameOptions(this, options);

    return initGame(resolvedOptions);
  }

  /**
   * Get a Map with all games
   * @typedef {Object} RegisterCount
   * @property {number} startedGames The started games
   * @returns {Map|RegisterCount}
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
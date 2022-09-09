// # FUNCTIONS
const resolveBoard = require('./functions/resolveBoard.js')
const resolveRecords = require('./functions/resolveRecords.js')
const resolveRules = require('./functions/resolveRules.js')
const resolveGameOptions = require('./functions/resolveGameOptions.js')

// # METHODS
const initGame = require('./methods/initGame');

// # UTILS
const gameError = require('./utils/gameError.js');

let gameOptions = {
    defaultBoard: 'default',
    defaultRecords:  'default',
    registerGames: true,
    defaultRules: {}
}

class Game {
  // #PRIVATE
  #games;

  constructor(options = {}) {
    let { defaultBoard, defaultRecords, registerGames, defaultRules } =
      Object.assign(gameOptions, options);

    this.board = resolveBoard(defaultBoard);
    this.records = resolveRecords(defaultRecords);
    this.rules = resolveRules(defaultRules);

    this.#games = registerGames ? new Map() : { startedGames: 0 };
  }

  initGame(options = {}) {
    if (typeof options !== "object" || Array.isArray(options))
      throw new gameError(
        `Se esperaba un objeto y se ha obtenido ${typeof options}.`
      );

    let resolvedOptions = resolveGameOptions(this, options);

    return initGame(resolvedOptions);
  }

  getGames() {
    return this.#games;
  }

  registerGames(boolean) {
    let games = this.#games;

    if (!(games instanceof Map) && boolean) this.#games = new Map();
    else if (games instanceof Map && !boolean)
      this.#games = { startedGames: games.size };
  }
}

module.exports = {Game};
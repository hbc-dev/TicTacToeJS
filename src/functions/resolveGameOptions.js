const resolveBoard = require("../functions/resolveBoard.js");
const resolveRecords = require("../functions/resolveRecords.js");
const resolveRules = require("../functions/resolveRules.js");
const resolvePlayers = require("./resolvePlayers.js");

/**
 * Init a new game with individual options
 * @param {Object} options The individual options
 */
module.exports = (props, options) => {
  let board = options.board ? resolveBoard(options.board) : props.board;
  let records = options.records ? resolveRecords(options.records) : props.records;
  let rules = resolveRules(Object.assign(props.rules, options.rules));
  let maxPlayers = board.maxPlayers <= rules.maxPlayers ? board.maxPlayers : rules.maxPlayers;
  let players = resolvePlayers(options.players, records, maxPlayers);

  return {
    players,
    board,
    records,
    rules
  }
};

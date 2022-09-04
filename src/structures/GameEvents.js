const {EventEmitter} = require('node:events');
const gameError = require('../utils/gameError.js')

/**
 * Game events names
 * @typedef {["inGame", ...any[]]} GameEventsName
 */

/**
 * Listen game events
 */
class GameEvents extends EventEmitter {
    /**
     * @param {GameEventsName} args
     */
    on(...args) {
      super.on(...args)
    }

    /**
     * @param {GameEventsName} args
     */
    once(...args) {
      super.once(...args)
    }

    /**
     * @param {GameEventsName} args
     */
    addListener(...args) {
      super.addListener(...args)
    }

    /**
     * @param {GameEventsName} args
     * @fires GameEvents#inGame
     */
    emit(...args) {
      super.emit(...args)
    }
}

module.exports = GameEvents;
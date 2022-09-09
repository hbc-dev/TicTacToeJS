const {EventEmitter} = require('node:events');
const gameError = require('../utils/gameError.js')

class GameEvents extends EventEmitter {
    on(...args) {
      super.on(...args)
    }

    once(...args) {
      super.once(...args)
    }

    addListener(...args) {
      super.addListener(...args)
    }

    emit(...args) {
      super.emit(...args)
    }
}

module.exports = GameEvents;
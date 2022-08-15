const {EventEmitter} = require('node:events');
const {readdirSync} = require('fs');
const {sep, resolve} = require('path')
const gameError = require('../utils/gameError.js')

/**
 * Listen game events
 */
class GameEvents extends EventEmitter {
    constructor() {
        super();

        this.#chargeEvents()
    }

    #chargeEvents() {
        try {
          let directory = resolve(__dirname, '../events')
          let files = readdirSync(directory);
          
          for (let file of files) {
            this.on(
              file.split(".js").shift(),
              require(resolve(directory + sep + file))
            );
          }
        } catch (error) {
          throw new gameError(
            `Se ha producido un error al cargar los eventos, vuelve a instalar el módulo:\n${error}`
          );
        }
    }
}

module.exports = GameEvents;
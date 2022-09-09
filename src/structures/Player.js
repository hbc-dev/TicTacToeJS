'use strict';
const gameError = require('../utils/gameError');

class Player {
    #destroyed = false;

    constructor({id, name, bot} = {}) {
        if (!id || typeof id !== 'number') throw new gameError(
            `Se esperaba que la id fuese un número`
        )

        if (bot) this.bot = this.setIA(bot)

        this.id = id;
        this.name = name ?? 'player'+id;
    }

    setName(name) {
        if (this.#destroyed) throw new gameError(
            `Este jugador ha sido destruído`
        );

        if (typeof name !== 'string') throw new gameError(
            `Se esperaba un string`
        );

        this.name = name;
        return this;
    }

    setIA({difficulty = 'medium', behaviour = 'random'} = {}) {
        if (this.#destroyed) throw new gameError(
            `Este jugador ha sido destruído`
        );

        let difficultyOptions = ['easy', 'medium', 'hard'];
        let behaviourOptions = ["random", "equalize", "slayer"];

        if (
            typeof difficulty !== 'string' ||
            !difficultyOptions.includes(difficulty) ||
            !behaviourOptions.includes(behaviour)
        ) throw new gameError(`Se han introducido valores incorrectos`);

        this.bot = {
            difficulty,
            behaviour
        }
    }

    destroy() {
        if (this.#destroyed) throw new gameError(
            `Este jugador ya ha sido destruído`
        );
        this.#destroyed = true;
    }

    get destroyed() {return this.#destroyed;}
}

module.exports = Player;
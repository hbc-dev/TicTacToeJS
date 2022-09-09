import {EventEmitter} from "node:events";
import GameEvents from "./structures/GameEvents"
import Player from "./structures/Player.js";
import {
    privateGame,
    GameOptionsDefault,
    GameOptions
} from './main.Interfaces'

export class Game extends EventEmitter {
    #games: privateGame;

    /**
     * The game initializer
     */
    constructor(options: GameOptionsDefault)

    /**
     * Init game with options
     */
    initGame(options: GameOptions): GameEvents;

    /**
     * Get all games
     */
    getGames(): privateGame

    /**
     * Enable or disable the game register
     */
    registerGames(boolean: boolean): void;
}

export {Player};
import {EventEmitter} from "node:events";
import GameEvents from "./structures/GameEvents"
import {
    privateGame,
    GameOptionsDefault,
    GameOptions
} from './main.Interfaces'

/**
 * The game initializer
 */
export class Game extends EventEmitter {
    #games: privateGame;

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
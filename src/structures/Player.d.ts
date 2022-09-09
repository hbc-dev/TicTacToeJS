import {
    PlayerOptions,
    botOptions
} from './Player.Interfaces'

export = class Player {
    #destroyed: boolean;

    /**
     * The player id
     */
    public id: string;
    /**
     * The player name
     */
    public name: string;
    /**
     * Bot options
     */
    public bot: botOptions;

    /**
     * Represents a player
     */
    constructor(options: PlayerOptions) 

    /**
     * Set the name player
     * @param name The player name
     */
    setName(name: string): this;

    /**
     * Set this instance like a bot
     * @param options The options for create a bot
     */
    setAI(options: botOptions): this;

    /**
     * Destroy this player
     */
    destroy():void;

    get destroyed(): boolean;
}
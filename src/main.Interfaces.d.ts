type RegisterCount = {
    /**
     * The started games
     */
    startedGames: number;
}
type boardStringTypes = "default" | "3x3" | "4x4"
type boardObjectTypes = {
    /**
     * The width of the board
     */
    anc: number;
    /**
     * The height of the board
     */
    alt: number;
}

/**
 * All records prebuild
 */
type RecordsTypes = "default" | "hearts" | "people" | "things" | "tools" | "weapons"

type RulesTypes = {
    /**
     * The max of movements per player
     */
    maxMovements: number;
    /**
     * The max of games per instance
     */
    maxGames: number;
    /**
     * The max of players that can enter in game
     */
    maxPlayers: number;
}

/**
 * The game register
 */
export type privateGame = Map<K, V> | RegisterCount;

/**
 * The game options
 */
export interface GameOptionsDefault {
    /**
     * The default board dimensions
     */
    defaultBoard: boardObjectTypes | boardStringTypes;
    /**
     * The default users records to play
     */
    defaultRecords: RecordsTypes | Array<string>;
    /**
     * The default rules for all games
     */
    defaultRules: RulesTypes;
    /**
     * Register games with id
     */
    registerGames: boolean;
}

export interface GameOptions {
    /**
     * The board dimensions
     */
    board: boardObjectTypes | boardStringTypes;
    /**
     * The users records to play
     */
    records: RecordsTypes | Array<string>;
    /**
     * The rules for the game
     */
    rules: RulesTypes;
    /**
     * The players id
     */
    players: Array<number>
}
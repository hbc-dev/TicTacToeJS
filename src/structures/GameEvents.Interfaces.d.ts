export interface events {
    /**
     * Emitted when a fight is started
     */
    inGame: (param: string) => void;
    /**
     * Emitted when the battle is in preparation
     */
    prepare: () => void;
    /**
     * Emitted when a player leaves the match
     */
    playerLeave: () => void;
}

export interface eventsOptions {
    /**
     * Emitted when a fight is started
     */
    inGame: [];
    /**
     * Emitted when the battle is in preparation
     */
    prepare: [];
    /**
     * Emitted when a player leaves the match
     */
    playerLeave: [];
}
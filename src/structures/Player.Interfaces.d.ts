type botOptions = {
    /**
     * The difficulty of the bot
     */
    difficulty?: 'easy' | "medium" | "hard";
    /**
     * The behaviour of the bot
     */
    behaviour?: 'random' | 'equalize' | 'slayer'
}

export interface PlayerOptions {
    /**
     * The id of the player
     */
    id?: string;
    /**
     * The name of the player
     */
    name?: string;
    /**
     * Set an IA for this player
     */
    bot?: botOptions;
}
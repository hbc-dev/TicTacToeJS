const gameError = require("../utils/gameError")

/**
 * Init a new game with individual options
 * @param {Object} options The individual options
 */
module.exports = (players, records, maxPlayers) => {
    if (!Array.isArray(players)) throw new gameError(
        `Se esperaba que "players" fuera un array`
    )

    if (players.length > maxPlayers) throw new gameError(
        `Solo pueden entrar un máximo de ${maxPlayers}`
    )

    if (players.length < 2) throw new gameError(
        `Deben entrar al menos 2 personas`
    )

    return players
}
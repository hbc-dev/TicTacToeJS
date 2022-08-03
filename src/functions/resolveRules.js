const gameError = require("../utils/gameError")

/**
 * Para poder resolver las reglas de juego
 * @function resolveRules
 * @param {Object} rules Las reglas
 * @returns {Object} Las reglas resueltas
 */
module.exports = (rules) => {
    if (typeof rules !== 'object' || Array.isArray(rules)) throw new gameError(
        `Se ha recibido un dato no esperado como reglas diferente a un objeto`
    );

    let {
        maxMovements,
        maxPlayers,
        maxGames
    } = rules

    if (maxMovements) {
        if (typeof maxMovements !== "number") throw new gameError(
            `El máximo de movimientos por `
        );

        if (maxMovements < 3) throw new gameError(
            `Como mínimo deben de haber 3 movimientos por usuario`
        )
    } 
    
    if (maxPlayers) {
        if (typeof maxPlayers !== 'number') throw new gameError(
            `El maxímo de jugadores debe de ser expresado como un número`
        )

        if (maxPlayers < 2 || maxPlayers > 4) throw new gameError(
            `Como mínimo deben de haber 2 jugadores y como máximo 4`
        )
    } 

    if (maxGames) {
        if (typeof maxGames !== 'number') throw new gameError(
            `El máximo de partidas simultáneas debe de ser expresado con un número`
        )

        if (maxGames < 1) throw new gameError(
            `No puede haber como máximo ${maxGames}, como mínimo 1`
        )
    }

    return {
        maxMovements,
        maxGames,
        maxPlayers
    }
}
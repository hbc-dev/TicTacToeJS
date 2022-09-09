const gameError = require("../utils/gameError")
const Player = require('../structures/Player.js')

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

    let count = 0;// no usen forEach 🤠
    let ids = [];
    for (let player of players) {
        if (typeof player !== 'object' && !(player instanceof Player) || Array.isArray(player)) throw new gameError(
            `Se esperaba que uno de los jugadores sea un objecto o instancia de "Player"`
        );

        if (ids.includes(player.id)) throw new gameError(
            `Se ha introducido un jugador con la misma id`
        ); else ids.push(player.id)

        if (!(player instanceof Player)) {
            players[count] = new Player(player)
            count++
        } else {
            if (player.destroyed) throw new gameError(
                `Uno de los jugadores con la id ${player.id} ha sido destruído`
            );else count++;continue;
        }
    }

    return players
}
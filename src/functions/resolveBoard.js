const gameError = require('../utils/gameError.js')

/**
 * Para poder deducir las dimensiones del tablero
 * @function resolveBoard
 * @param {string|Object<string, number>} board El tablero
 * @returns {object} Las propiedades del tablero y extras
 */
module.exports = (board) => {
    let data;

    if (typeof board == 'string') {
        if (board == 'default') data = [3, 3]
        else data = board.split('x')

        if (data.length < 2) throw new gameError('Se han introducido valores incorrectos')

        let alt = parseInt(data[1]);
        let anc = parseInt(data[0]);
        let toString = anc + 'x' + alt;
        let maxPlayers = alt - 1;

        if (!alt || alt > 5 || alt < 3) throw new gameError(
            'Ha ocurrido un error con el alto. No puedes ser mayor que 5 ni menor de 3'
        );
        if (!anc || anc > 5 || anc < 3) throw new gameError(
            "Ha ocurrido un error con el ancho. No puedes ser mayor que 5 ni menor de 3"
        );
        if (alt !== anc) throw new gameError(
            `El tablero introducido no está proporcionado: ${toString}`
        )

        return {anc, alt, toString, maxPlayers};
    } else if (typeof board == 'object' && !Array.isArray(board)) {
        if (!('alt' in board)) throw new gameError('Falta el valor "alt"');
        if (!("anc" in board)) throw new gameError('Falta el valor "alt"');

        let {alt, anc} = board;
        alt = parseInt(alt)
        anc = parseInt(anc)
        let toString = anc + "x" + alt;
        let  maxPlayers = alt-1;

        if (isNaN(alt) || isNaN(anc)) throw new gameError(`Se han introducido valores no numéricos`)
        if (!alt || alt > 5 || alt < 3) throw new gameError(
            'Ha ocurrido un error con el alto. No puedes ser mayor que 5 ni menor de 3'
        );
        if (!anc || anc > 5 || anc < 3) throw new gameError(
            "Ha ocurrido un error con el ancho. No puedes ser mayor que 5 ni menor de 3"
        );
        if (alt !== anc) throw new gameError(
            `El tablero introducido no está proporcionado: ${toString}`
        );
        else return { anc, alt, toString, maxPlayers }; 
    } else throw new gameError(`Se esperaba un string u object y se ha obtenido ${typeof board}`)
}
const gameError = require("../utils/gameError.js");
let prebuiltRecords = {
  default: ["⭕", "❌", "❗", "❓"],
  hearts: ["❤️", "💚", "💙", "💜"],
  people: ["🏋️", "🧘", "🤸", "🏌️"],
  things: ["🎲", "📷", "🔦", "🕹️"],
  tools: ["🪛", "⛏️", "🪓", "🔧"],
  weapons: ["🏹", "🗡️", "⚔️", "🔫"],
};

/**
 * All records prubuild
 * @typedef {"default"|"hearts"|"people"|"things"|"tools"|"weapons"} RecordsTypes
 */

/**
 * Para poder seleccionar las fichas y resolverlas
 * @function resolveRecords
 * @param {RecordsTypes|Array<string>} records Las fichas
 * @returns {object} Las propiedades de las fichas
 */
module.exports = (records) => {
    let index = 0;

    if (typeof records == 'string') records = prebuiltRecords[records]

    if (Array.isArray(records)) {
        if (records.length < 3 || records.length > 5) throw new gameError(
            `Se pueden introducir un mínimo de 3 fichas y un máximo de 5`
        )

        for (let record of records) {
            let filtered = record.match(/^\p{Emoji}/u);

            if (!filtered) throw new gameError(
                `Se ha introducido una ficha que no es un emoji: "${record}"`
            )

            records[index] = filtered[0]
            index++
        }

        return records
    } else throw new gameError(`Se han introducido fichas incorrectas`)
};

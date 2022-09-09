const {Game, Player} = require('../src/main.js')

const player = new Player({
    id: 2143
});

const myGame = new Game({
    defaultRecords: 'people',
    defaultRules: {
        maxGames: 5,
        destroyPlayers: false
    }
});

let initializedGame = myGame.initGame({
    players: [player, {id: 323982932}],
    rules: {},
    board: 'default',
    records: 'people'
});
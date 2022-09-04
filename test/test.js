const {Game} = require('../src/main.js')

const myGame = new Game({
    defaultRecords: 'people',
    defaultRules: {
        maxGames: 5
    }
});

let initializedGame = myGame.initGame({
    players: [1, 2],
    rules: {},
    board: 'default',
    records: 'people'
});

initializedGame.on()
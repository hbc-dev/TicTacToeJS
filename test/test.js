const {Game} = require('../src/main.js')

const myGame = new Game({
    registerGames: false,
    defaultRules: {
        maxMovements: 21,
        maxGames: 10**3,
        maxPlayers: 3
    },
});

myGame.registerGames()

myGame.initGame({
    board: {anc: 5, alt: 5},
    records: 'things',
    rules: {
        maxMovements: 3,
    },
})
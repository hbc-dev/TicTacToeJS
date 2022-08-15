const {Game} = require('../src/main.js')

const myGame = new Game({
    registerGames: false,
    defaultRules: {
        maxMovements: 21,
        maxGames: 10**3,
        maxPlayers: 3
    },
});

myGame.registerGames(true)

let initializedGame = myGame.initGame({
    players: [1, 2]
});

initializedGame.emit("prepare");
function mixPlayers(players) {
    let positions = players.length;

    for (let player of players.reverse()) {
        players[Math.floor(Math.random() * positions)] = player
    }

    return players;
}

module.exports = mixPlayers;
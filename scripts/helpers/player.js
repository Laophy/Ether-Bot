const getPlayer = require('../helpers/getPlayer');
const savePlayer = require('../helpers/getPlayer');

const newPlayer = async (message) => {
    let player = {
        id: message.author.id,
        name: message.author.username,
        coins: 0.0,
        ether: 0,
        boost: 0.0,
        lastCheck: new Date(),
    }
    return player 
}

module.exports = newPlayer
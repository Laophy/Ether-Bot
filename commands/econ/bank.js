const getPlayer = require('../../scripts/helpers/getPlayer');

module.exports = {
    name: 'bank',
    description: 'View you bank!',
    aliases: ['b'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        message.reply(`${player.name}s total Coins: \`${player.coins}\`!\n${player.name}s total Ether: ${player.ether}<:ether:974121190618722325>!`);
    }
}
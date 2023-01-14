const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'work',
    description: 'Start working!',
    aliases: ['wk'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        message.reply(`Work for dat money!!!!! ${player.name}`);
    }
}
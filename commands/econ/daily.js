const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'daily',
    description: 'Gain a daily reward!',
    aliases: ['dy'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        message.reply(`You have redeemed your daily reward of \`200\` coins!`);

        player.coins += 200;
        savePlayer(player);
    }
}
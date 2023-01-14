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
        //message.reply(`Work for dat money!!!!! ${player.name}`);
        
        const etherBed = {
            color: '#20ff1c',
            title: 'Daily Claim',
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/s4vaOYZ.png',
            },
            description: `You have redeemed your daily reward of \`200\` coins!`,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
        };
        message.channel.send({ embeds: [etherBed] });

        player.coins += 200;
        savePlayer(player);
    }
}
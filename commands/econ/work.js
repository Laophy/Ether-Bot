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
        //message.reply(`Work for dat money!!!!! ${player.name}`);
        
        const etherBed = {
            color: '#20ff1c',
            title: 'Work',
            url: 'https://discord.js.org',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            description: 'Get ready to work! You will earn `450` coins in 2 hours! Check back later for more updates.',
            image: {
                url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG @2023',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
        };
        message.channel.send({ embeds: [etherBed] });
    }
}
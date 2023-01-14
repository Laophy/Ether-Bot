const fs = require("fs");
const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'rob',
    description: 'Rob a player!',
    aliases: ['rb'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        //let bet = isNaN(args[0]) ? (args[0] == 'all' ? player.coins : 0) : args[0];

        const etherBed = {
            color: '#ff2f1c',
            title: 'Rob a Player!',
            width: 250,
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/tZqUsa1.png',
            },
            description: `You attempted to rob ${player.name}`,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            }
        };
        message.channel.send({ embeds: [etherBed] });

        savePlayer(player); // save data
    }
}
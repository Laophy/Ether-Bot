const getPlayer = require('../../scripts/helpers/getPlayer');

module.exports = {
    name: 'bank',
    description: 'View you bank!',
    aliases: ['b'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        const etherBed = {
            color: '#20ff1c',
            title: 'Ether Bank',
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/tGlc5uE.gif',
            },
            description: `Coins: \`${player.coins}\`!\nEther: ${player.ether}<:ether:974121190618722325>!`,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
        };
        message.channel.send({ embeds: [etherBed] });
    }
}
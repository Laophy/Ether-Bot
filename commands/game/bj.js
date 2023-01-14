const fs = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');

const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'bj',
    description: 'Play quick black jack!',
    aliases: ['bj'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        let bet = isNaN(args[0]) ? (args[0] == 'all' ? player.coins : 0) : args[0];
        let ether = '<:ether:974121190618722325>'
        if(bet <= 0){return;}

        const etherBed = {
            color: '#20ff1c',
            title: 'Black Jack!',
            width: 250,
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/b1B6YTj.png',
            },
            description: 'Test blackjack!!',
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            }
        };
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('hit')
                .setLabel('HIT')
                .setStyle('DANGER'),
            new MessageButton()
                .setCustomId('stand')
                .setLabel('STAND')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('double')
                .setLabel('DOUBLE')
                .setStyle('DANGER'),
        );
        //message.channel.send({ embeds: [etherBed], components: [row] });
        await message.reply({ embeds: [etherBed], components: [row], content: "A button was pressed..."});
    }
}
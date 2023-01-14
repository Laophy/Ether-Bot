const getPlayer = require("../../scripts/helpers/getPlayer");
const savePlayer = require("../../scripts/helpers/savePlayer");

module.exports = {
  name: "harvest",
  description: "Harvest and collect plants!",
  aliases: ["hv"],
  disabled: false,
  admin: false,
  execute: async (client, message, args) => {
    let player = await getPlayer(client, message, args);

    let fishSize = Math.floor(Math.random() * 20) + 1;
    let fishChance = Math.floor(Math.random() * 100) + 1;

    let planets = [''];
    let msg = 'You went digging around in the forest... but didnt find anything! Better luck next time.'

    const etherBed = {
        color: '#8BBA71',
        title: 'Harvest and Collect Items',
        url: 'https://discord.gg/etherion',
        author: {
            name: 'Ether Bot',
            icon_url: 'https://i.imgur.com/Fzuqo6H.png',
        },
        thumbnail: {
            url: 'https://i.imgur.com/ksgQtin.png',
        },
        description: msg,
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Etherion Online MMORPG',
            icon_url: 'https://i.imgur.com/Fzuqo6H.png',
        },
    };
    message.channel.send({ embeds: [etherBed] });
  },
};

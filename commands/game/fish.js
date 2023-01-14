const getPlayer = require("../../scripts/helpers/getPlayer");
const savePlayer = require("../../scripts/helpers/savePlayer");

module.exports = {
  name: "fish",
  description: "Go fishing!",
  aliases: ["fs"],
  disabled: false,
  admin: false,
  execute: async (client, message, args) => {
    let player = await getPlayer(client, message, args);

    let fishSize = Math.floor(Math.random() * 20) + 1;
    let fishChance = Math.floor(Math.random() * 100) + 1;
    let img = 'https://i.imgur.com/1TMDuy7.gif';
    let msg = '';
    let color = '#20ff1c';

    let fish = ['https://i.imgur.com/X1sb2nH.png', 'https://i.imgur.com/dhJBYqr.png', 'https://i.imgur.com/LHg8MaE.png', 'https://i.imgur.com/YgHOflm.png', 'https://i.imgur.com/pglTSoA.png']

    if (fishChance <= 45) {
      if (!player.fish) {
        player.fish = {
          biggest: fishSize,
          smallest: fishSize,
          total: 0,
        };
      }
      msg = `${player.name} Caught a :fish:! Size ${fishSize}in!`;
      img = fish[Math.floor(Math.random() * 5)];
      if (fishSize > player.fish.biggest) {
        player.fish.biggest = fishSize;
      }
      if (fishSize < player.fish.smallest) {
        player.fish.smallest = fishSize;
      }

        player.fish.total++;
        savePlayer(player);
    } else {
      msg = `Better luck next time`;
      color = '#ff2f1c';
    }

    const etherBed = {
        color: color,
        title: 'Fishing',
        url: 'https://discord.gg/etherion',
        author: {
            name: 'Ether Bot',
            icon_url: 'https://i.imgur.com/Fzuqo6H.png',
        },
        thumbnail: {
            url: img,
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

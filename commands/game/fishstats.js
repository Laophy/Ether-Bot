const getPlayer = require("../../scripts/helpers/getPlayer");
const savePlayer = require("../../scripts/helpers/savePlayer");

module.exports = {
  name: "fishstats",
  description: "Check items!!",
  aliases: ["fss"],
  disabled: false,
  admin: false,
  execute: async (client, message, args) => {
    let player = await getPlayer(client, message, args);

    let msg = `Biggest :fish: ${player?.fish.biggest}in\nSmallest :fish: ${player?.fish.smallest}in\nTotal :fishing_pole_and_fish: ${player?.fish.total}`;
    const etherBed = {
      color: 'blue',
      title: 'Fishing Stats',
      url: 'https://discord.gg/etherion',
      author: {
          name: 'Ether Bot',
          icon_url: 'https://i.imgur.com/Fzuqo6H.png',
      },
      thumbnail: {
          url: 'https://i.imgur.com/1TMDuy7.gif',
      },
      description: msg,
      timestamp: new Date().toISOString(),
      footer: {
          text: 'Etherion Online MMORPG',
          icon_url: 'https://i.imgur.com/Fzuqo6H.png',
      },
  };
  message.channel.send({ embeds: [etherBed] });
  }
};

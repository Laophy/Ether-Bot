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

    message.reply(`Biggest :fish: ${player?.fish.biggest}\nSmallest :fish: ${player?.fish.smallest}\nTotal :fishing_pole_and_fish: ${player?.fish.total}`)
  }
};

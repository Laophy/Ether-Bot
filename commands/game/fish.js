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

    if (fishChance <= 45) {
      if (!player.fish) {
        player.fish = {
          biggest: fishSize,
          smallest: fishSize,
          total: 0,
        };
      }
      message.reply(`${player.name} Caught a :fish:! Size ${fishSize}in!`);
      if (fishSize > player.fish.biggest) {
        player.fish.biggest = fishSize;
      }
      if (fishSize < player.fish.smallest) {
        player.fish.smallest = fishSize;
      }

        player.fish.total++;
        savePlayer(player);
    } else {
      message.reply(`Missed the catch :shrimp:! Try again!`);
    }
  },
};

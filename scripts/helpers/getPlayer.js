const fs = require("fs");
const newPlayer = require('./player');

const getPlayer = async (client, message, args) => {
  const data = JSON.parse(
    fs.readFileSync("./data/players.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  let players = data.players;
  let player;
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === message.author.id) {
      return await players[i];
    }
  }

  data.players.push(await newPlayer(message));

  fs.writeFileSync("./data/players.json", JSON.stringify(data), {
    encoding: "utf8",
    mode: 0o666,
  });

  return await newPlayer(message) // returns the newPlayer obj
};

module.exports = getPlayer;

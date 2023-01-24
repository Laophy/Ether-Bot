const fs = require("fs");

const savePlayer = async (savePlayer) => {
  const data = JSON.parse(
    fs.readFileSync("./data/players.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  let players = data.players;
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === savePlayer.id) {
      //save the data
      savePlayer.lastCheck = new Date();
      players[i] = savePlayer;
    }
  }

  fs.writeFileSync("./data/players.json", JSON.stringify(data), {
    encoding: "utf8",
    mode: 0o666,
  });
};

module.exports = savePlayer;

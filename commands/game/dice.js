const fs = require("fs");
const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'dice',
    description: 'Role the dice!',
    aliases: ['dc'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        let bet = isNaN(args[0]) ? (args[0] == 'all' ? player.coins : 0) : args[0];

        if (player.coins < bet || player.coins === 0 || bet === 0) {
            message.reply(`Not enough coins or betting 0 nerd?!?!!`);
            return;
        }else{
            let ether = '<:ether:974121190618722325>'
            let playerRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
            let botRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    
            let playerTotal = playerRoll[0] + playerRoll[1];
            let botTotal = botRoll[0] + botRoll[1];
            let msg;
            if(playerTotal > botTotal){
                msg = `**Player Wins:** \`${bet}\`!`;
            }else if(playerTotal === botTotal){
                msg = "TIE!";
            }else {
                msg = "**Bot Wins!**";
            }
    
            message.reply(
                `**Your Roll: \`${playerRoll[0]}\`${ether} \`${playerRoll[1]}\`${ether}**\nBot Roll: \`${botRoll[0]}\`${ether} \`${botRoll[1]}\`${ether}
                \n${msg}`
            );

            if(playerTotal > botTotal){
                player.coins += bet*2; // player wins
                savePlayer(player); // save data
            }else if (playerTotal == botTotal){
                return; // player ties
            }else{
                player.coins -= bet; // player loss
                savePlayer(player); // save data
            }
        }
    }
}
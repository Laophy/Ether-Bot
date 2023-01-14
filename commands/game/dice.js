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

        let bet = args[0];
        if (player.coins < bet) {
            message.reply(`You can only afford to play ${player.coins} coins!`);
            return;
        }else{
            let ether = '<:ether:974121190618722325>'
            let playerRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
            let botRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    
            let playerTotal = playerRoll.reduce(function(a, b) { return a + b; }, 0);
            let botTotal = botRoll.reduce(function(a, b) { return a + b; }, 0);
    
            message.reply(
                `**Your Roll: \`${playerRoll[0]}\`${ether} \`${playerRoll[1]}\`${ether}**\nBot Roll: \`${botRoll[0]}\`${ether} \`${botRoll[1]}\`${ether}
                \n${playerRoll > botRoll ? `**YOU won ${args[0]*2}!**` : playerRoll == botRoll ? `TIE! - Refunded` : `Bot Wins!`}
                `
            );

            if(playerTotal > botTotal){
                player.coins += bet*2; // player wins
            }else if (playerTotal == botTotal){
                return; // player ties
            }else{
                player.coins -= bet; // player loss
            }

            savePlayer(player); // save data
        }
    }
}
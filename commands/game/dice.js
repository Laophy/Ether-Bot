module.exports = {
    name: 'dice',
    description: 'Role the dice!',
    aliases: ['dc'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let ether = '<:ether:974121190618722325>'
        let playerRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        let botRoll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

        let playerTotal = playerRoll.reduce(function(a, b) { return a + b; }, 0);
        let botTotal = botRoll.reduce(function(a, b) { return a + b; }, 0);

        message.reply(
            `**Your Roll: \`${playerRoll[0]}\`${ether} \`${playerRoll[1]}\`${ether}**\nBot Roll: \`${botRoll[0]}\`${ether} \`${botRoll[1]}\`${ether}
            \n${playerRoll > botRoll ? `**YOU won!**` : playerRoll == botRoll ? `TIE! - Refunded` : `Bot Wins!`}
            `
        );
    }
}
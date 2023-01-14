const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

const commaNumber = require("comma-number");

const TimeAgo = require("javascript-time-ago");
const en = require("javascript-time-ago/locale/en");
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

module.exports = {
    name: 'daily',
    description: 'Gain a daily reward!',
    aliases: ['dy'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        let dailyReward = 200;
        let msg;
        let color = '#707070';

        let today = new Date();
        if(!player.daily){
            player.daily = {
                lastClaimed: today
            }
            msg = `You have redeemed your daily reward of \`200\` coins!`;
            player.coins += dailyReward;
            color = '#20ff1c';
        }else{
            let hours = Math.abs(new Date(player.daily.lastClaimed) - today) / 36e5;

            if(hours >= 24){
                msg = `You have redeemed your daily reward of \`200\` coins!`;
                player.coins += dailyReward;
                // Change claim date to today
                player.daily = {
                    lastClaimed: today
                }
                color = '#20ff1c';
            }else{
                msg = `You already claimed your reward **` + timeAgo.format(new Date(player.daily.lastClaimed), "round",) + `**, check back in **${(24-hours).toFixed(0)}** hours.`;
            }
        }
        // Save data
        savePlayer(player);
        
        const etherBed = {
            color: color,
            title: 'Daily Claim',
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/2ukzehm.gif',
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
}
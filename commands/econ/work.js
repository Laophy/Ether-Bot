const getPlayer = require('../../scripts/helpers/getPlayer');
const savePlayer = require('../../scripts/helpers/savePlayer');

module.exports = {
    name: 'work',
    description: 'Start working!',
    aliases: ['wk'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        let player = await getPlayer(client, message, args);
        let workReward = 200;
        let msg;
        let color = '#707070';

        let today = new Date();
        if(!player.work){
            player.work = {
                lastClaimed: today
            }
            msg = `Get ready to work! You will earn ${workReward} coins in 2 hours! Check back later for more updates.`;
            player.coins += workReward;
            color = '#20ff1c';
        }

        let hours = Math.abs(new Date(player.work.lastClaimed) - today) / 36e5;
        if(hours >= 2){
            msg = `You have earned ${workReward}`;
            player.coins += workReward;
            // Change claim date to today
            player.work = {
                lastClaimed: today
            }
            color = '#20ff1c';
        }else{
            msg = `Get ready to work! You will earn :coin:\`${workReward}\` every 2 hours! Come back in ${(2-hours).toFixed(1)} hours to claim your paycheck!`
            //msg = `You already claimed your reward ` + timeAgo.format(new Date(player.daily.lastClaimed), "round",) + `, check back in \`${(24-hours).toFixed(2)}\` hours.`;
        }
        savePlayer(player);
        
        const etherBed = {
            color: color,
            title: 'Work',
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/tkJSQqK.png',
            },
            description: msg,
            // image: {
            //     url: 'https://i.imgur.com/Fzuqo6H.png',
            // },
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
        };
        message.channel.send({ embeds: [etherBed] });
    }
}
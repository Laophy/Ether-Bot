module.exports = {
    name: 'faq',
    description: 'Frequently asked questions.',
    aliases: ['fq'],
    disabled: false,
    admin: false,
    execute: async (client, message, args) => {
        //message.reply('<:sign:974120109431984139> Please checkout <#974110585161670686> and <#974031040857395250> to see Etherions Updates and Frequently asked Questions! Etherion is currently under major development. Players can expect an Alpha Release in the near future.');
        let msg = '<:sign:974120109431984139> Please checkout <#974110585161670686> and <#974031040857395250> to see Etherions Updates and Frequently asked Questions! Etherion is currently under major development. Players can expect an Alpha Release in the near future.';
        const etherBed = {
            color: '#FAFF33',
            title: 'Etherion FAQ!',
            width: 250,
            url: 'https://discord.gg/etherion',
            author: {
                name: 'Ether Bot',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            },
            image: {
                url: 'https://i.imgur.com/HkjLTFQ.png',
            },
            description: msg,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Etherion Online MMORPG',
                icon_url: 'https://i.imgur.com/Fzuqo6H.png',
            }
        };
        message.channel.send({ embeds: [etherBed] });
    }
}
module.exports = {
    name: 'kick',
    description: 'Say wanted to kick someone.',
    guildOnly: true,
    execute(message, args) {
        //ถ้าไม่แท๊กก็เตะไม่ได้
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        //แสดงข้อความอยากจะเตะหน้าคุณ
        const taggedUser = message.mentions.users.first();
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};
module.exports = {
    name: 'พูดอัง',
    description: 'เปิดไพ่แล้วมาดูดวงกัน',

    execute(message, args) {
        const Attachment = require('discord.js');
        const attachment = new Attachment('https://drive.google.com/file/d/1OEc8po9snsf8CRy0_sxjcbsxdeLC-Ipz/view?usp=sharing');
        message.channel.send(message.author, attachment);
    },
};
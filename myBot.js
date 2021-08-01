const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botKitten = new Discord.Client(); //ประกาศ client ขึ้นมา
const { prefix, token } = require('./config.json');


//event นี้ทำงานเมื่อ login สำเร็จ
botKitten.on('ready', () => {
    console.log('Kitten ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน

botKitten.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong.');
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);
    } else if (command === 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        // Grab the "first" mentioned user from the message
        // This will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
        });

        // Send the entire array of strings as a message
        // By default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }

    // if (command === '${prefix} ping') {
    //     // send back "Pong." to the channel the message was sent in
    //     message.channel.send('Pong.');
    // } else if (message.content === `${prefix} beep`) {
    //     message.channel.send('Boop.');
    // } else if (message.content === `${prefix}`) { message.channel.send(`พิมพ์ \n${prefix}พูดอังกฤษ \nนะ`); } else if (message.content === `${prefix}server`) {
    //     message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    // } else if (message.content === `${prefix} พูดอังกฤษ` || message.content === `${prefix} พูดภาษาอังกฤษ` || message.content === `${prefix}พูดภาษาอังกฤษได้มั้ย` || message.content === `${prefix}พูดภาษาอังกฤษได้ไหม` || message.content === `${prefix}พูดอังกฤษได้มั้ย` || message.content === `${prefix}พูดอังกฤษได้ไหม`) {
    //     message.channel.send('อย่างสีเหลือง.');
    //     botKitten.on('message', message => {
    //         if (message.content === `เยลโล่` || message.content === `Yellow` || message.content === `yellow` || message.content === `เยลโล่ว`) {
    //             message.channel.send('มะม่วง');
    //             botKitten.on('message', message => {
    //                 if (message.content === `แมงโก` || message.content === `Mango` || message.content === `mango` || message.content === `แมงโก้`) {
    //                     message.channel.send('มีด');
    //                     botKitten.on('message', message => {
    //                         if (message.content === `อีโต้` || message.content === `อีโต`) {
    //                             message.channel.send('เก่งเหมือนกันนะเนี่ย');
    //                         } else {}
    //                     });
    //                 } else {}
    //             });
    //         } else {}
    //     });
    // }

});



botKitten.login(token);
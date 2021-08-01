const fs = require('fs');
const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botKitten = new Discord.Client(); //ประกาศ client ขึ้นมา

const { prefix, token } = require('./config.json'); //เก็บ prefix กับ token

//เรียก command ของ botKitten
botKitten.commands = new Discord.Collection();
//เซ็ต cooldown ของ botKitten
botKitten.cooldowns = new Discord.Collection();

//เก็บ command
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        botKitten.commands.set(command.name, command);
    }
}

//event นี้ทำงานเมื่อ login สำเร็จ
botKitten.on('ready', () => {
    console.log('Kitten ready!');
});

//โซน command
botKitten.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = botKitten.commands.get(commandName) ||
        botKitten.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    //บอกว่าถ้าไม่ได้ทำไม่ได้ permission ไม่ได้ใส่ arg
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    //ถ้าเป็น guild only ก็ DM ไม่ได้นาจาาา
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    //เรียกใช้ command ครับโผมมม
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


botKitten.login(token);
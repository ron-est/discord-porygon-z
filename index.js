const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!')

    // Ping Pong Test
    command(client, 'ping', (message) => {
        message.channel.send('Pong!')
    })

    // Displays servers and member count
    command(client, 'servers', message => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members`
            )
        })
    })

    // Updates the bot status
    command(client, 'status', (message) => {
        const content = message.content.replace('!status', '')
        // '!status hello world' -> 'hello world'

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
    })
})

client.login(process.env.DJS_TOKEN)
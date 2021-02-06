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

// Create an event listener for messages
client.on('message', async message => {

    // Billy BTS Response
    if (message.content.toUpperCase().includes('BTS')) {

        let billyBTS = message.guild.emojis.cache.get('314491276076515328')
        message.react(billyBTS)
        message.react('🇧')
        message.react('🇹')
        message.react('🇸')
    }

    // @ Responses
    if (message.author.bot) return false

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false

    // @Ron Response
    if (message.mentions.has('142896214566764544')) {
        
        let ronYuup = message.guild.emojis.cache.get('357038386089033729')
        message.react(ronYuup)
        message.channel.send('ₕₑᵧₘₐₙ')
    }

    // @Ron Bot Response
    if (message.mentions.has(client.user.id)) {

        message.channel.send('🇾 ' + '🇺 ' + '🆙')
    }

    // @Alan Response
    if (message.mentions.has('448189018585301003')) {
        
        message.channel.send('Sorry guys. Gotta get drunk at a party with people!')
    }

    // @Justin Bot Response
    if (message.mentions.has('124409215698731008')) {

        message.channel.send('Removed!')
    }

})

client.login(process.env.DJS_TOKEN)
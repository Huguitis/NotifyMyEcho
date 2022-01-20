module.exports = ({
name: "info",
aliases: ["help", "ayuda"],
code: `
$description[1;
**__$username[$findUser[$message]]'s Account:__**
• $username[$findUser[$message]] have sent **$getGlobalUserVar[messagecount;$findUser[$message]]** messages to <@$getVar[OwnerID]>'s Alexa!
• ¿Is $username[$findUser[$message]] banned? **$getGlobalUserVar[blacklist]**

**__Bot Commands:__**
• **Public:**
- \`$getVar[DiscordBotPrefix]info\` Shows this help message.
- \`$getVar[DiscordBotPrefix]send\` Send a message to <@$getVar[OwnerID]>'s Alexa!

• **Private:**
- \`$getVar[DiscordBotPrefix]eval\` Execute a code with Discord.
- \`$getVar[DiscordBotPrefix]djseval\` Execute a js code with Discord.
- \`$getVar[DiscordBotPrefix]blacklist\` Blacklist an user in the bot.
- \`$getVar[DiscordBotPrefix]unblacklist\` Unblacklist an user in the bot.
- \`$getVar[DiscordBotPrefix]activate\` Allow users to send messages.
- \`$getVar[DiscordBotPrefix]desactivate\` Block users to send messages.

**• [GitHub Repository](https://github.com/Huguitis/NotifyMyAlexa-DiscordBot)**
**• [Bot Invite]($getBotInvite[admin])**
**• [Support Server](https://discord.gg/et2BERsYSM)**
]

$color[1;GREEN]

$thumbnail[1;$userAvatar[$findUser[$message]]]

$footer[1;Created by ! Huguitis#4927]`
})

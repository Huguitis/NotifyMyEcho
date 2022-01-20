module.exports = ({
name: "info",
aliases: ["help", "ayuda"],
code: `
$description[1;
**__$username[$findUser[$message]]'s Account:__**
• $username[$findUser[$message]] have sent **$getGlobalUserVar[messagecount;$findUser[$message]]** messages to Huguitis's Alexa!
• ¿Is $username[$findUser[$message]] banned? **$getGlobalUserVar[blacklist]**

**__Bot Commands:__**
• **Public:**
- \`alexa info\` Shows this help message.
- \`alexa send\` Send a message to <@$getVar[OwnerID]>'s Alexa!

• **Private:**
- \`alexa eval\` Execute a code with Discord.
- \`alexa djseval\` Execute a js code with Discord.
- \`alexa blacklist\` Blacklist an user in the bot.
- \`alexa unblacklist\` Unblacklist an user in the bot.
- \`alexa activate\` Allow users to send messages.
- \`alexa desactivate\` Block users to send messages.

**• [Bot Invite]($getBotInvite[admin])**
**• [Support Server]($getVar[MainServerInvite])**
]

$color[1;GREEN]

$thumbnail[1;$userAvatar[$findUser[$message]]]

$footer[1;Created by $userTag[$getVar[OwnerID]]]`
})
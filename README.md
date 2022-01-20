# NotifyMyAlexa-DiscordBot
**Users on your discord server will be able to send you via discord messages for your Alexa to reproduce them!**
- Support: https://discord.gg/et2BERsYSM
- Contact: ! Huguitis#4927

![Gif](https://s10.gifyu.com/images/2022-01-20-21-00-44.gif)
*Sorry for the slow gif*

# Important Info
- Do not remove the credits! (Otherwise as I find out you will die) <3
- Amazon enforces a per-user limit of 5 notifications in a 5 minute period. If you try to send more than 5 notifications within a 5 minute period, the api ignores your sixth request and returns a HTTP 429 error.
- The way Alexa notifications work is that you hear a chime sound and the Echo's light ring illuminates to let you know you have pending notifications. When you hear the tone or see the light, say "Alexa, what are my notifications" to hear your notifications.

# Setup
1. Download [NodeJS v16](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi).
2. Download and extract the bot files.
3. Install all the required packages with the `npm i` command.
4. Config your bot in the **settings.json** file: (REMOVE ALL THE COMMENTS)
```json
{
  "DiscordBotToken": "", // Ur bot's token, get from https://discord.com/developers
  "DiscordBotPrefix": "", // Ur bot's prefix, ex: !
  "NotifyMeToken": "", // Ur "Notify Me" token, you can get one with below tutorial.
  "OwnerID": "", // Ur id for the admin commands, ex: 83976374893
  "LogsChannelID": "", // Ur channel id for the logs channel, ex: 92467298442
  "MainServerID": "", // Ur server id for the send command, ex: 392374264276
  "MainServerInvite": "https://discord.gg/et2BERsYSM", 
  "BlacklistedWords": "word1, word2, word3...", // Add words that users cannot send to your alexa, separate them with ", "

  "StatusText": "you", // Your bot's status type
  "StatusType": "WATCHING", // Your bot's status type

  // The emojis that the bot will use
  "SuccessEmoji": "...", // <a:tick:858714283236130818> or :white_check_mark: are valid emojis.
  "ErrorEmoji": "...",
  "LoadingEmoji": "..."
}
```
5. Run the bot with the `npm start` command

# How to get the "Notify Me" Token

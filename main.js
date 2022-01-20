///////////////////////////////////////
// CODE CREATED BY "! Huguitis#4927" //
//////  DO NOT REMOVE CREDITS! ////////
///////////////////////////////////////

const aoijs = require("aoi.js")
const setting = require("./settings.json");
const bot = new aoijs.Bot({
token: setting.DiscordBotToken, 
prefix: setting.DiscordBotPrefix,
intents: "all",
database : {
      type : "default",
      promisify : false,
      tables : ["main"],
      path : "./Database/" 
    }
})
const loader = new aoijs.LoadCommands(bot)

// Events
bot.onMessage()

// Command Handler
loader.load(bot.cmd,"./src/")

// Status
bot.status({
  text: setting.StatusText,
  type: setting.StatusType,
  status: "online",
  time: 12
})

// Variables, do not change anything
bot.variables({
NotifyMeToken: setting.NotifyMeToken,
DiscordBotPrefix: setting.DiscordBotPrefix,
SuccessEmoji: setting.SuccessEmoji,
ErrorEmoji: setting.ErrorEmoji,
LoadingEmoji: setting.LoadingEmoji,
OwnerID: setting.OwnerID,
LogsChannelID: setting.LogsChannelID,
MainServerID: setting.MainServerID,
MainServerInvite: setting.MainServerInvite,
BlacklistedWords: setting.BlacklistedWords,

blacklist: "false",
active: "true",
messagecount: "0"
})

// Custom Functions
bot.functionManager.createCustomFunction({
 name: "$httpStatus",
 type: "djs",
 code: async d => {
 const data = d.util.openFunc(d)
 const [url] = data.inside.splits
 var request = require('axios');
await request.get(url).then((response) => {
 data.result = response.status
 }).catch(function(error) {
 if(error.response) {
 data.result = error.response.status
 }
 else {
 data.result = error
 }
 })
return {
 code: d.util.setCode(data)
 }
 }
 })
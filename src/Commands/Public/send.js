module.exports = ({
name: "send",
code: `
$channelSendMessage[$getVar[LogsChannelID];{newEmbed:{description: $getVar[SuccessEmoji] **<@$authorID> ($authorID) Have sent a message:**
$message.
**Now $username sent $getGlobalUserVar[messagecount] messages in total.**}{color:YELLOW}}]

$sendMessage[{newEmbed:{description: $getVar[SuccessEmoji] Done! <@$getVar[OwnerID]> should have heard it on his Alexa.}{color:GREEN}};no]
$wait[7s]
$sendMessage[{newEmbed:{description: $getVar[LoadingEmoji] Sending the message: **$message** to <@$getVar[OwnerID]>'s Alexa...}{color:YELLOW}{delete:7s}};no]

$setGlobalUserVar[messagecount;$sum[$getGlobalUserVar[messagecount];1]]

$djsEval[var https = require("https");

var body = JSON.stringify({

    "notification": "Mensaje de $username: $message",

    "accessCode": "$getVar[NotifyMeToken]"

});

https.request({

    hostname: "api.notifymyecho.com",

    path: "/v1/NotifyMe",

    method: "POST",

    headers: {

        "Content-Type": "application/json",

        "Content-Length": Buffer.byteLength(body)

    }

}).end(body);]

$serverCooldown[13s;{newEmbed:{description: $getVar[ErrorEmoji] Global Cooldown, all users using the bot must wait **%time%** before re-executing the command due to api limitations.}{color:RED}}]

$onlyIf[$checkContains[$message;$joinSplitText[;]]!=true;{newEmbed:{description: $getVar[ErrorEmoji] Your message contains inappropriate words! >:U}{color:RED}}]
$textSplit[$getVar[BlacklistedWords];, ]

$argsCheck[<50;{newEmbed:{description: $getVar[ErrorEmoji] Your message must not contain more than **50** words!}{color:RED}}]

$argsCheck[>0;{newEmbed:{description: $getVar[ErrorEmoji] You must indicate at least **1** word! Example: \`alexa send bfer is gay\`}{color:RED}}]

$onlyIf[$getVar[active]!=false;{newEmbed:{description: $getVar[ErrorEmoji] <@$getVar[OwnerID]> is not available, so you can not send messages now.}{color:RED}}]

$onlyForServers[$getVar[MainServerID];722020882675007518;{newEmbed:{description: $getVar[ErrorEmoji] You only can use this command in $getVar[MainServerInvite]}{color:RED}}]

$onlyIf[$getGlobalUserVar[blacklist]!=true;{newEmbed:{description: $getVar[ErrorEmoji] You cannot use this command because you are blacklisted. You must have done something wrong!}{color:RED}}]

`
})
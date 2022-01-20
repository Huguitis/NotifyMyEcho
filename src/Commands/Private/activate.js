module.exports = ({
name: "activate",
code: `
$sendMessage[{newEmbed:{description: $getVar[SuccessEmoji] Done! Now users can send messages to the Alexa.}{color:GREEN}};no]

$setVar[active;true]

$onlyIf[$getVar[active]!=true;{newEmbed:{description: $getVar[ErrorEmoji] Users already can send messages with the bot.}{color:RED}}]

$onlyForIDs[$getVar[OwnerID];{newEmbed:{description: $getVar[ErrorEmoji] This command can be used only by <@$getVar[OwnerID]>}{color:RED}}]`
})
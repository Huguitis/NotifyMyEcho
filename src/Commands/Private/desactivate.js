module.exports = ({
name: "desactivate",
code: `
$sendMessage[{newEmbed:{description: $getVar[SuccessEmoji] Done! Now users can not send messages to the Alexa.}{color:GREEN}};no]

$setVar[active;false]

$onlyIf[$getVar[active]!=false;{newEmbed:{description: $getVar[ErrorEmoji] Users can not send messages with the bot.}{color:RED}}]

$onlyForIDs[$getVar[OwnerID];{newEmbed:{description: $getVar[ErrorEmoji] This command can be used only by <@$getVar[OwnerID]>}{color:RED}}]`
})
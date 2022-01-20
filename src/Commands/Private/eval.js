module.exports = ({
name: "eval",
code: `$eval[$message]
$onlyForIDs[$getVar[OwnerID];{newEmbed:{description: $getVar[ErrorEmoji] This command can be used only by <@$getVar[OwnerID]>}{color:RED}}]`
})
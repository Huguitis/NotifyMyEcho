module.exports = ({
name: "unblacklist",
code: `
$sendMessage[{newEmbed:{description: $getVar[SuccessEmoji] Done! <@$findUser[$message]> now can use the bot commands.}{color:GREEN}};no]

$setGlobalUserVar[blacklist;false;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklist;$findUser[$message]]!=false;{newEmbed:{description: $getVar[ErrorEmoji] That user is not blacklisted!}{color:RED}}]

$onlyIf[$getVar[OwnerID]!=$findUser[$message];{newEmbed:{description: $getVar[ErrorEmoji] You must indicate a valid user! Example: \`alexa blacklist bfer\`}{color:RED}}]

$argsCheck[>0;{newEmbed:{description: $getVar[ErrorEmoji] You must indicate an user! Example: \`alexa unblacklist bfer\`}{color:RED}}]

$onlyForIDs[$getVar[OwnerID];{newEmbed:{description: $getVar[ErrorEmoji] This command can be used only by <@$getVar[OwnerID]>}{color:RED}}]`
})
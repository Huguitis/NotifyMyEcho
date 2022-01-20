module.exports = ({
name: "blacklist",
code: `
$sendMessage[{newEmbed:{description: $getVar[SuccessEmoji] Done! <@$findUser[$message]> now can not use the bot commands.}{color:GREEN}};no]

$setGlobalUserVar[blacklist;true;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklist;$findUser[$message]]!=true;{newEmbed:{description: $getVar[ErrorEmoji] That user is already blacklisted!}{color:RED}}]

$onlyIf[$getVar[OwnerID]!=$findUser[$message];{newEmbed:{description: $getVar[ErrorEmoji] You must indicate a valid user! Example: \`alexa blacklist bfer\`}{color:RED}}]

$argsCheck[>0;{newEmbed:{description: $getVar[ErrorEmoji] You must indicate an user! Example: \`alexa blacklist bfer\`}{color:RED}}]

$onlyForIDs[$getVar[OwnerID];{newEmbed:{description: $getVar[ErrorEmoji] This command can be used only by <@$getVar[OwnerID]>}{color:RED}}]`
})
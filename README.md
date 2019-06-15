# fishy-AFKer
Prevents the game from leaking your afk-state to the game-server


## Installation
put `defs` insides to `node_modules\tera-data\protocol\` folder  
put `opcodes` insides to `node_modules\tera-data\map\` (in ToolBox that's a folder for opcodes in **addition** to standart ones) (In Pinkies you'd have to merge contents of those files with ones you already have, I think)

`ERROR: Error: [dispatch] hook: unmapped packet ` means you have no opcodes installed correctly for your current game version  
`unsupported packet ` means you have no defs installed correctly  


## Notes

Opcodes are gotten via third-party sources mostly (submitted by users), if there is no opcode for your region - too bad, you'd have to get em yourself, can't help you here, use https://github.com/Owyn/alex-packet-id-finder - then just enter `fpi C_UPDATE_AFK_STATUS` and go afk for 5 minutes - here, now you've got the opcode (move after 5 minutes and it'd proc again) you'd need to put into your protocol file (see above Installation section), your protocol is written on game launch in the proxy console like this `[toolbox] Loaded protocol version 350024 (RU v82.5).` 

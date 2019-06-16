module.exports = function fishy_AFKer(mod) {
	mod.hook('C_UPDATE_AFK_STATUS', 1, event=>{
		mod.command.message("AFK: " + event.status)
		return false;
	});
}

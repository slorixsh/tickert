module.exports = {
	name: 'add',
	category: 'Ticket',
	description: 'Adds a member to a specified ticket.',
	aliases: [],
	usage: 'add <member>',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args, prefix) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`<:warningg:864501501824073728>Incorrect Usage! Correct Usage:${prefix}add <member><:warningg:864501501824073728>`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`<:true:864468957846962176> Successfully added ${member} to ${message.channel} <:true:864468957846962176>`);
				});
			}
			catch(e) {
				return message.channel.send('<:warningg:864501501824073728>An error occurred, please try again!<:warningg:864501501824073728>');
			}
		}
	},
};
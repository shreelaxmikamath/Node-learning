const { REST, Routes } = require('discord.js');

const commands = [
    {
        name:"ping",
        description:"Replies with pon!",
    },
];

const rest = new REST().setToken("");
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands('1389571649988202606', '1389570058065416324'),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
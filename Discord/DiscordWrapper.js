import Discord from "discord.js";

export class DiscordBot
{
    constructor(config)
    {
        this.Key = config.credentials.key;
    }

    StartConnection()
    {
        console.log("Starting connection with Discord...");
        this.Client = new Discord.Client();
    }

    CloseConnection()
    {
        console.log("Closing connection with Discord!");
        this.Client.destroy();
    }
}


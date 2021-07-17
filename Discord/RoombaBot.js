import INI from "ini";
import FS from "fs";
import {DiscordBot} from "./DiscordWrapper.js";
import { RoombaLogger } from "../Helper/RoombaLogger.js";

export class RoombaBot
{    
    constructor(configPath)
    {
        let Log = new RoombaLogger();
        Log.Success("RoombaBot");
        this.config = RoombaBot.#GetIniConfig(configPath);
        this.bot = new DiscordBot(this.config.bot);
        this.bot.StartConnection();
        this.bot.CloseConnection();
    }

    static #GetIniConfig(configPath)
    {
        if (!FS.existsSync(configPath)) throw new Error(`Bot Config file is missing at ${configPath}`);
        return INI.parse(FS.readFileSync(configPath,"UTF-8"));
    }
}

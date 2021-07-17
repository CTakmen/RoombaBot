import {RoombaBot} from "./Discord/RoombaBot.js";
import {RoombaLogger} from "./Helper/RoombaLogger.js";

var Log = new RoombaLogger(null);
Log.Debug("Trollololo");
Log.Success("YEY");
Log.Error("⚠️ Warning");
Log.Fatal("⛔️ Fatal");

console.log("Starting Roomba Bot...");

let roomba = new RoombaBot("./Doc/roombaBot.ini");


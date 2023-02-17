import { io } from "socket.io-client";

import { API_URL } from "../../config";
import { Context } from "./types";

export const context: Context = { socket: null };

// function creatChannel(username: string) {
// socket.on("connected", (players) => {
//   debugger;
//   console.log("players: ", players);
// });
// socket.on("opponent_made_choice", (players) => {
//   console.log("players: ", players);
// });
// socket.emit("get_players");
// socket.on("players_received", (players) => {
//   debugger;
//   console.log("players: ", players);
// });
// socket.on("game_finished", (players) => {
//   console.log("players: ", players);
// });
// }

export const SocketAPI = {
  start(username: string) {
    if (context.socket) {
      SocketAPI.stop();
    }

    context.socket = io(API_URL, {
      query: {
        username,
      },
      transports: ["websocket"],
    });
    context.socket.on("connected", (players) => {
      debugger;
      console.log("players: ", players);
    });
  },
  stop() {
    context.socket?.close();
  },
};

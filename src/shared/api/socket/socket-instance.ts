import { io } from "socket.io-client";

import { API_URL } from "../../config";
import { Context } from "./types";

export const context: Context = { socket: null };

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
  },
  stop() {
    context.socket?.close();
  },
};

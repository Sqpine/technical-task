import { ServerToClientEvents } from "./types";
import { EventsNameType } from "./consts";
import { context } from "./socket-instance";

export const playersReceived = (
  callback: ServerToClientEvents[EventsNameType.playersReceived]
) => context.socket?.on(EventsNameType.playersReceived, callback);

export const playerDisconnected = (
  callback: ServerToClientEvents[EventsNameType.disconnected]
) => context.socket?.on(EventsNameType.disconnected, callback);

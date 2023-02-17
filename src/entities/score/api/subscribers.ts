import { context, EventsNameType, ServerToClientEvents } from "shared/api";

export const gameFinished = (
  callback: ServerToClientEvents[EventsNameType.gameFinished]
) => context.socket?.on(EventsNameType.gameFinished, callback);

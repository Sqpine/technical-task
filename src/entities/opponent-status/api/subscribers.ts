import { context, EventsNameType, ServerToClientEvents } from "shared/api";

export const opponentMadeChoice = (
  callback: ServerToClientEvents[EventsNameType.opponent_made_choice]
) => context.socket?.on(EventsNameType.opponent_made_choice, callback);

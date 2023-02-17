import { context, EventsNameType } from "shared/api";

export const getAllPlayers = () => {
  context.socket?.emit(EventsNameType.getPlayers);
};

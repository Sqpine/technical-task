import { EventsNameType, context } from "shared/api";
import { CardType } from "shared/lib";

export const selectCard = (cardType: CardType) => {
  context.socket?.emit(EventsNameType.choose, cardType);
};

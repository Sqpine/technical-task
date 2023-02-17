import { CardType, context, EventsNameType } from "shared/api";

export const selectCard = (cardType: CardType) => {
  context.socket?.emit(EventsNameType.choose, cardType);
};

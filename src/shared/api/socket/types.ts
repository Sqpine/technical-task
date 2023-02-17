import { CardType } from "../../lib";
import { Socket } from "socket.io-client";

export type Username = { username: string };

type GameResult = {
  username: string;
  choice: CardType;
};

export type GameFinished = {
  results: GameResult[];
};

export type SocketType = Socket<
  ServerToClientEvents,
  ClientToServerEvents
> | null;

export type Context = { socket: SocketType };

export type ServerToClientEvents = {
  connected: (user: Username) => void;
  // disconnected: (user: Username) => void;
  disconnected: (user: Username) => void;
  players_received: (players: string[]) => void;
  opponent_made_choice: (user: Username) => void;
  game_finished: (players: GameFinished) => void;
};

export type ClientToServerEvents = {
  choose: (cardType: CardType) => void;
  get_players: () => void;
};

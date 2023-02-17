export type Score = {
  win: number;
  lose: number;
  tie: number;
};

export type ScoreApi = {
  win: (pos: Score) => Score;
  tie: (pos: Score) => Score;
  lose: (pos: Score) => Score;
};

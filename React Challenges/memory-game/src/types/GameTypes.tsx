export type Stage = "main" | "in-game" | "end";
export type Mode = "default" | "random" | "custom";
export type Difficulty = "easy" | "medium" | "hard";

export type GameState = {
  stage: Stage;
  mode: Mode;
  difficulty: Difficulty;
};

export type Card = {
  id: string;
  name: string;
  imgSrc: string;
  active: boolean;
  removed: boolean;
};

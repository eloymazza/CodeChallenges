export type Stage =
  | "main"
  | "in-game"
  | "end"
  | "random-images-set"
  | "custom-images-set";
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

export type CardImages = {
  name: string;
  imgSrc: string;
  type: string;
};

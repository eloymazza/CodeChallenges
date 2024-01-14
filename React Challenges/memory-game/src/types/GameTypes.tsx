export type Stage = "main" | "in-game" | "end";

export type GameState = {
  stage: Stage;
  mode: "default" | "random" | "custom";
  difficulty: "easy" | "medium" | "hard";
};

export type Card = {
  id: string;
  name: string;
  imgSrc: string;
  active: boolean;
  removed: boolean;
};

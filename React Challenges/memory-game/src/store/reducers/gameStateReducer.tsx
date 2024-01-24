import { GameState } from "../../types/GameTypes";

export type GameAction = {
  type: "UPDATE";
  payload: Partial<GameState>;
};

export const gameStateReducer = (gameState: GameState, action: GameAction) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        ...gameState,
        ...action.payload
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

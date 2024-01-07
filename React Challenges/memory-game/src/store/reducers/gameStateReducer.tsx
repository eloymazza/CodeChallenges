import { GameState } from "../../types/GameTypes";

export type Action<T> = {
  type: "UPDATE";
  payload: Partial<T>;
};

export const gameStateReducer = (
  gameState: GameState,
  action: Action<GameState>
) => {
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

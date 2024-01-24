import { createContext } from "react";
import { GameState } from "../../types/GameTypes";
import { GameAction } from "../reducers/gameStateReducer";

export const GameContext = createContext<GameState | null>(null);

export const GameDispatchContext = createContext<React.Dispatch<GameAction>>(
  {} as React.Dispatch<GameAction>
);

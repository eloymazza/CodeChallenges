import { createContext } from "react";
import { GameState } from "../../types/gameTypes";
import { GameAction } from "../reducers/gameStateReducer";

export const GameContext = createContext<GameState | null>(null);

export const GameDispatchContext = createContext<React.Dispatch<GameAction>>(
  {} as React.Dispatch<GameAction>
);

import { createContext } from "react";
import { GameState } from "../../types/GameTypes";
import { Action } from "../reducers/gameStateReducer";

export const GameContext = createContext<GameState | null>(null);

export const GameDispatchContext = createContext<
  React.Dispatch<Action<GameState>>
>({} as React.Dispatch<Action<GameState>>);

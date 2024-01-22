import React, { useReducer } from "react";
import { GameState } from "../types/GameTypes";
import { gameStateReducer } from "../store/reducers/gameStateReducer";
import {
  GameContext,
  GameDispatchContext
} from "../store/contexts/gameStateContext";

type Props = {
  children: React.ReactNode;
};

const GameStateProvider = ({ children }: Props) => {
  const initialState: GameState = {
    stage: "main",
    mode: "default",
    difficulty: "easy"
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return (
    <GameContext.Provider value={gameState}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

export default GameStateProvider;

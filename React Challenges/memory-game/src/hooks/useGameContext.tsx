import { useContext } from "react";
import { GameContext } from "../store/contexts/gameStateContext";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext)
    throw Error("useGameContext must be used within a GameStateProvider");
  return gameContext;
};

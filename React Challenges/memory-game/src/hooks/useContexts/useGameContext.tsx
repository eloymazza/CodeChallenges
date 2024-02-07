import { useContext } from "react";
import {
  GameContext,
  GameDispatchContext
} from "../../store/contexts/gameStateContext";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext)
    throw Error("useGameContext must be used within a GameStateProvider");
  return gameContext;
};

export const useGameDispatchContext = () => {
  const dispatch = useContext(GameDispatchContext);
  if (!dispatch)
    throw Error(
      "imagesDispatchContext must be used within a gameImagesProvider"
    );
  return dispatch;
};

import { useReducer } from "react";
import { Photo } from "../services/imageServices";
import { gameImagesReducer } from "../store/reducers/gameImagesReducer";
import {
  GameImagesContext,
  GameImagesDispatchContext
} from "../store/contexts/gameImagesContext";

type Props = {
  children: React.ReactNode;
};

const GameImagesProvider = ({ children }: Props) => {
  const initialState = [] as Photo[];
  const [gameImages, dispatch] = useReducer(gameImagesReducer, initialState);

  return (
    <GameImagesContext.Provider value={gameImages}>
      <GameImagesDispatchContext.Provider value={dispatch}>
        {children}
      </GameImagesDispatchContext.Provider>
    </GameImagesContext.Provider>
  );
};

export default GameImagesProvider;

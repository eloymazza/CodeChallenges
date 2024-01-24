import { useContext } from "react";
import { GameImagesContext } from "../../store/contexts/gameImagesContext";

export const useGameContext = () => {
  const imagesContext = useContext(GameImagesContext);
  if (!imagesContext)
    throw Error("imagesContext must be used within a gameImagesProvider");
  return imagesContext;
};

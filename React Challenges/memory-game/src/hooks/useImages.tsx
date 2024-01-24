import { useContext, useState } from "react";
import { GameContext } from "../store/contexts/gameStateContext";
import { CardImages } from "../types/GameTypes";
import { getDefaultImages } from "../utils/defaultCards";

// TODO think about  how to use this hook regarding new images
export const useImages = (qty: number) => {
  const gameContext = useContext(GameContext);

  const [sourceImages, setSourceImages] = useState<CardImages[]>(
    (() => {
      if (gameContext?.mode) {
        return getDefaultImages(qty);
      }
      return [];
    })()
  );

  // const searchNewImages = (searchTerm: string, qty: number) => {
  //   const images = fetchImages(searchTerm, qty);
  //   console.log("fetched images", images);
  // };

  return { sourceImages, setSourceImages };
};

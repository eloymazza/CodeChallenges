import { useContext, useState } from "react";
import { GameContext } from "../store/contexts/gameStateContext";
import { CardImages } from "../types/GameTypes";
import { getDefaultImages } from "../utils/defaultCards";
import { getImages } from "../services/imageServices";

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

  const searchNewImages = (searchTerm: string, qty: number) => {
    return getDefaultImages(qty);
  };

  return { sourceImages, setSourceImages };
};

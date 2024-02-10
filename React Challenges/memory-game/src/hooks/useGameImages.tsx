import { useState } from "react";
import { getDefaultImages } from "../utils/defaultCards";
import { useGameContext } from "./useContexts/useGameContext";
import { useImagesContext } from "./useContexts/useImagesContext";
import { GameImage } from "../types/imageTypes";

export const useGameImages = (qty: number) => {
  const { mode } = useGameContext();
  const gameImages = useImagesContext();

  const [sourceImages, setSourceImages] = useState<GameImage[]>(
    (() => {
      switch (mode) {
        case "default":
          return getDefaultImages(qty);
        case "random": {
          return gameImages;
        }
        default:
          return [];
      }
    })()
  );

  return { sourceImages, setSourceImages };
};

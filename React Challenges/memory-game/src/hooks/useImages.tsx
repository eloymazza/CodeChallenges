import { useState } from "react";
import { CardImages } from "../types/GameTypes";
import {
  getDefaultImages,
  getGameImagesFromPhotos
} from "../utils/defaultCards";
import { useGameContext } from "./useContexts/useGameContext";
import { useImagesContext } from "./useContexts/useImagesContext";

export const useImages = (qty: number) => {
  const { mode } = useGameContext();
  const photos = useImagesContext();

  const [sourceImages, setSourceImages] = useState<CardImages[]>(
    (() => {
      switch (mode) {
        case "default":
          return getDefaultImages(qty);
        case "random": {
          console.log("photos", photos);
          return getGameImagesFromPhotos(photos);
        }
        default:
          return [];
      }
    })()
  );

  return { sourceImages, setSourceImages };
};

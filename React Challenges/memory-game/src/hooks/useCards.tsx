import { useState } from "react";
import { arrayShuffle } from "../utils/utils";
import { Card } from "../types/GameTypes";
import { useImages } from "./useImages";

type Props = {
  elementsQTY: number;
};

export const useCards = ({ elementsQTY }: Props) => {
  const { sourceImages } = useImages(elementsQTY);
  const defaultCardsImages = sourceImages.concat(sourceImages);
  const randomizedCardImages = arrayShuffle(defaultCardsImages);
  const [cards, setCards] = useState<Card[]>(
    Array.from({ length: elementsQTY * 2 }).map((_, index) => {
      const { name, imgSrc } = randomizedCardImages[index];
      return {
        id: (index + 1).toString(),
        name,
        imgSrc,
        active: false,
        removed: false
      };
    })
  );

  return { cards, setCards };
};

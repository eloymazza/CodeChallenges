import { useState } from "react";
import { getDefaultImages } from "../utils/defaultCards";
import { arrayShuffle } from "../utils/utils";
import { Card } from "../types/GameTypes";

type Props = {
  elementsQTY: number;
};

export const useCards = ({ elementsQTY }: Props) => {
  const defaultImages = getDefaultImages(elementsQTY);
  const defaultCardsImages = defaultImages.concat(defaultImages);
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

import { useState } from "react";
import { arrayShuffle } from "../utils/utils";
import { GameImage } from "../types/imageTypes";
import { Card } from "../types/gameTypes";

type Props = {
  elementsQTY: number;
  sourceImages: GameImage[];
};

export const useCards = ({ sourceImages, elementsQTY }: Props) => {
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

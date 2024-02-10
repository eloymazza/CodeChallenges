import { GameImage } from "../types/imageTypes";

export const getDefaultImages = (qty: number): GameImage[] =>
  Array.from({ length: qty }).map((_, index) => {
    return {
      name: `default-${index + 1}`,
      imgSrc: `../src/assets/defaultCardImages/default-${index + 1}.jpg`,
      type: `default-${index + 1}`
    };
  });

import { GameImage } from "../../types/imageTypes";

export type ImagesAction = {
  type: "UPDATE";
  payload: GameImage[];
};

export const gameImagesReducer = (
  gameImages: GameImage[],
  action: ImagesAction
) => {
  switch (action.type) {
    case "UPDATE": {
      return [...gameImages, ...action.payload];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

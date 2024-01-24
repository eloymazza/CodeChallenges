import { Photo } from "../../services/imageServices";

export type ImagesAction = {
  type: "UPDATE";
  payload: Photo[];
};

export const gameImagesReducer = (photos: Photo[], action: ImagesAction) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        ...photos,
        ...action.payload
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

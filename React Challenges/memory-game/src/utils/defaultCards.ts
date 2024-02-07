import { Photo } from "../services/imageServices";
import { CardImages } from "../types/GameTypes";

export const getDefaultImages = (qty: number): CardImages[] =>
  Array.from({ length: qty }).map((_, index) => {
    return {
      name: `default-${index + 1}`,
      imgSrc: `../src/assets/defaultCardImages/default-${index + 1}.jpg`,
      type: `default-${index + 1}`
    };
  });

export const getGameImagesFromPhotos = (photos: Photo[]) => {
  return photos.map((photo, index) => {
    return {
      name: `photo-${index + 1}`,
      imgSrc: photo.src.large,
      type: `photo-${index + 1}`
    };
  });
};

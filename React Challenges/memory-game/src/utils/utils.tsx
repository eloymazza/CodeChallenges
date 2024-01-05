import { CardImages } from "./defaultCards";

export const arrayShuffle = <T,>(array: Array<T>) => {
  return array.sort(() => Math.random() - 0.5);
};

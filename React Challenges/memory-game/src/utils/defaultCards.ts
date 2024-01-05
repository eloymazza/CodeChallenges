export type CardImages = {
  name: string;
  imgSrc: string;
  type: string;
};

export const getDefaultImages = (qty: number): CardImages[] =>
  Array.from({ length: qty }).map((_, index) => {
    return {
      name: `defualt-${index + 1}`,
      imgSrc: `../src/assets/defaultCardImages/default-${index + 1}.jpg`,
      type: `default-${index + 1}`
    };
  });

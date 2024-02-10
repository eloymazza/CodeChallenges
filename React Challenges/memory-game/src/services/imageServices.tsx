import { Photo } from "../types/imageTypes";

const IMAGES_API_BASE_URL = "https://api.pexels.com/v1";

export type ImageResponse = {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
};

export const fetchImages = async (query: string, quantity: number) => {
  const options = {
    headers: {
      Authorization: "zHp3kIIQgzgusuAmelDHrdUMHgBO089L9kz1tcisKaLEf9P4Vh1HvFo8"
    }
  };
  const response = await fetch(
    `${IMAGES_API_BASE_URL}/search?query=${query}&per_page=${quantity}`,
    options
  );
  if (!response.ok) {
    throw new Error("Error fetching images");
  }
  const body: ImageResponse = await response.json();
  return body;
};

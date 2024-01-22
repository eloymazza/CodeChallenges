const IMAGES_API_BASE_URL = "https://api.pexels.com/v1";

export type ImageResponse = {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
};

export type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
};

export type Src = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

export const fetchImages = async (
  query: string,
  quantity: number
): Promise<ImageResponse> => {
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
  console.log(response);
  const body: ImageResponse = await response.json();
  console.log(body);
  return body;
};

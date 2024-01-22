import React from "react";
import { fetchImages } from "../../services/imageServices";

const getImages = async (searchTerm: string) => {
  try {
    const images = await fetchImages(searchTerm, 10);
    return images;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching images");
  }
};

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const searchTerm = data.get("search-images");
  if (!searchTerm) {
    throw new Error("No search term provided");
  }
  const images = getImages(searchTerm as string);
};

const RandomImagesForm = () => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' name='search-images' />
      <button type='submit'>Preview</button>
    </form>
  );
};

export default RandomImagesForm;

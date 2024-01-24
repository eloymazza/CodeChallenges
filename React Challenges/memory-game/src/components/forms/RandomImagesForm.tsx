import React from "react";
import { fetchImages } from "../../services/imageServices";

const RandomImagesForm = () => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const searchTerm = data.get("search-images");
    if (!searchTerm) {
      throw new Error("No search term provided");
    }
    const previewImages = await fetchImages(searchTerm as string, 10);
    console.log(previewImages);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' name='search-images' />
      <button type='submit'>Preview</button>
    </form>
  );
};

export default RandomImagesForm;

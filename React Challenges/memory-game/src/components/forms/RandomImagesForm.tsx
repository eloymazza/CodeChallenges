import React from "react";

type Props = {
  onSubmit: (searchTerm: string, photoQTY: number) => void;
};

const RandomImagesForm = ({ onSubmit }: Props) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const searchTerm = data.get("search-images");
    if (!searchTerm) {
      throw new Error("No search term provided");
    }
    onSubmit(searchTerm.toString(), 10);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' name='search-images' />
      <button type='submit'>Preview</button>
    </form>
  );
};

export default RandomImagesForm;

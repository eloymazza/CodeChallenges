import { fetchImages } from "../services/imageServices";

const getImages = async (searchTerm: string) => {
  try {
    const images = await fetchImages(searchTerm, 10);
    return images;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching images");
  }
};

const RandomImageScreen = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const searchTerm = data.get("search-images");
    if (!searchTerm) {
      throw new Error("No search term provided");
    }
    getImages(searchTerm as string);
  };

  return (
    <section>
      <h1>Search the subject of your images! </h1>
      <form onSubmit={handleFormSubmit}>
        <input type='text' name='search-images' />
        <button type='submit'>Preview</button>
      </form>
    </section>
  );
};

export default RandomImageScreen;

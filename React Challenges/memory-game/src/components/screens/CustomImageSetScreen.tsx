import { useState } from "react";

const IMAGES_GAME_QTY = 10;

const CustomImagesSetScreen = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[] | null>(
    null
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    const urls: string[] = [];
    Array.from(files).forEach((file) => {
      if (!validImageTypes.includes(file.type)) {
        console.error("Invalid file type. Please upload an image file.");
        return;
      }
      const url = URL.createObjectURL(file);
      urls.push(url);
    });
    setImagePreviewUrls(urls);
  };

  const startCustomGame = () => {
    if (!imagePreviewUrls || imagePreviewUrls.length !== IMAGES_GAME_QTY)
      console.log("No enough images to start game with");
    // TODO start custom game
    // setSourceImages(getGameImagesFromPhotos(imagePreviewUrls));
  };

  const startGameEnabled = imagePreviewUrls?.length ?? 0 >= IMAGES_GAME_QTY;

  return (
    <section>
      <h1>Custom Image Set</h1>
      <input
        type='file'
        accept='image/*'
        multiple
        onChange={handleFileUpload}
      />
      {imagePreviewUrls?.map((imagePreviewUrls) => (
        <img
          key={crypto.randomUUID()}
          src={imagePreviewUrls}
          alt='Preview'
          width={300}
          height={300}
        />
      ))}
      <button onClick={startCustomGame} disabled={!startGameEnabled}>
        Start Game
      </button>
    </section>
  );
};

export default CustomImagesSetScreen;

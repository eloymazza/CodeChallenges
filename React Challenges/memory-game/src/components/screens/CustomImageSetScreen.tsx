import { useState } from "react";
import { useImageDispatchContext } from "../../hooks/useContexts/useImagesContext";
import { useGameDispatchContext } from "../../hooks/useContexts/useGameContext";

const IMAGES_GAME_QTY = 10;

const CustomImagesSetScreen = () => {
  const [imgQTY, setImgQTY] = useState<number>(0);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const dispatchGameImages = useImageDispatchContext();
  const dispatchGameState = useGameDispatchContext();

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

    setImgQTY(urls.length);
    setImagePreviewUrls(urls);
  };

  const startCustomGame = () => {
    if (imgQTY < IMAGES_GAME_QTY) {
      console.error("No enough images to start game with");
      return;
    }
    const gameImages = imagePreviewUrls?.map((url, index) => ({
      name: "cusotm-image-" + index,
      imgSrc: url,
      type: "custom",
      alt: "Custom Image"
    }));
    dispatchGameImages({ type: "UPDATE", payload: gameImages });
    dispatchGameState({
      type: "UPDATE",
      payload: {
        stage: "in-game"
      }
    });
  };

  const startGameEnabled = imgQTY >= IMAGES_GAME_QTY;

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
          width={250}
          height={200}
        />
      ))}
      <button onClick={startCustomGame} disabled={!startGameEnabled}>
        Start Game
      </button>
    </section>
  );
};

export default CustomImagesSetScreen;

import { useState } from "react";
import RandomImagesForm from "../forms/RandomImagesForm";
import { Photo, fetchImages } from "../../services/imageServices";
import styles from "./random-image-screen.module.css";
import PreviewImages from "../PreviewImages";
import { useGameDispatchContext } from "../../hooks/useContexts/useGameContext";
import { useImageDispatchContext } from "../../hooks/useContexts/useImagesContext";

const RandomImageScreen = () => {
  const [previewImages, setPreviewImages] = useState<Photo[]>([]);
  const gameDispatch = useGameDispatchContext();
  const gameImageDispatch = useImageDispatchContext();

  const searchPreviewImages = async (searchTerm: string, photoQTY: number) => {
    const images = await fetchImages(searchTerm, photoQTY);
    setPreviewImages(images.photos);
  };

  const startGame = () => {
    gameImageDispatch({ type: "UPDATE", payload: previewImages });
    gameDispatch({
      type: "UPDATE",
      payload: {
        stage: "in-game"
      }
    });
  };

  return (
    <section>
      <div className={styles.searchContainer}>
        <h1>Search the subject of your images! </h1>
        <RandomImagesForm onSubmit={searchPreviewImages} />
      </div>
      <PreviewImages images={previewImages} />
      {!!previewImages.length && (
        <button type='button' onClick={startGame}>
          Start Game
        </button>
      )}
    </section>
  );
};

export default RandomImageScreen;

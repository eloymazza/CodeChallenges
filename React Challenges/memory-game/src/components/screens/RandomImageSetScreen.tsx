import { useState } from "react";
import RandomImagesForm from "../forms/RandomImagesForm";
import { fetchImages } from "../../services/imageServices";
import styles from "./random-image-screen.module.css";
import PreviewImages from "../PreviewImages";
import { useGameDispatchContext } from "../../hooks/useContexts/useGameContext";
import { useImageDispatchContext } from "../../hooks/useContexts/useImagesContext";
import { GameImage, Photo } from "../../types/imageTypes";

const RandomImageScreen = () => {
  const [previewPhotos, setPreviewPhotos] = useState<Photo[]>([]);
  const gameDispatch = useGameDispatchContext();
  const gameImageDispatch = useImageDispatchContext();

  const searchPreviewImages = async (searchTerm: string, photoQTY: number) => {
    const { photos } = await fetchImages(searchTerm, photoQTY);
    setPreviewPhotos(photos);
  };

  const startGame = () => {
    const gameImages: GameImage[] = previewPhotos.map((photo) => {
      return {
        ...photo,
        name: photo.alt,
        type: "random",
        imgSrc: photo.src.medium,
        alt: photo.alt
      };
    });

    gameImageDispatch({ type: "UPDATE", payload: gameImages });
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
      <PreviewImages photos={previewPhotos} />
      {!!previewPhotos.length && (
        <button type='button' onClick={startGame}>
          Start Game
        </button>
      )}
    </section>
  );
};

export default RandomImageScreen;

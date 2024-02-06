import { useState } from "react";
import RandomImagesForm from "../forms/RandomImagesForm";
import { Photo, fetchImages } from "../../services/imageServices";
import PreviewImages from "../PrevieWImages";
import styles from "./random-image-screen.module.css";

const RandomImageScreen = () => {
  const [previewImages, setPreviewImages] = useState<Photo[]>([]);

  const searchPreviewImages = async (searchTerm: string, photoQTY: number) => {
    const images = await fetchImages(searchTerm, photoQTY);
    setPreviewImages(images.photos);
  };

  return (
    <section>
      <div className={styles.searchContainer}>
        <h1>Search the subject of your images! </h1>
        <RandomImagesForm onSubmit={searchPreviewImages} />
      </div>
      <PreviewImages images={previewImages} />
    </section>
  );
};

export default RandomImageScreen;

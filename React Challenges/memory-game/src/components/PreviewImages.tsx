import { Photo } from "../types/imageTypes";
import styles from "./preview-images.module.css";

type Props = {
  photos: Photo[];
};

const PreviewImages = ({ photos }: Props) => {
  return (
    <section className={styles.previewImagesContainer}>
      {photos.map((image) => {
        return (
          <article className={styles.previewImage}>
            <img src={image.src.large} alt={image.alt} />
          </article>
        );
      })}
    </section>
  );
};

export default PreviewImages;

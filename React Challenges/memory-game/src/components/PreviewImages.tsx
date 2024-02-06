import { Photo } from "../services/imageServices";
import styles from "./preview-images.module.css";

type Props = {
  images: Photo[];
};

const PreviewImages = ({ images }: Props) => {
  return (
    <section className={styles.previewImagesContainer}>
      {images.map((image) => {
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

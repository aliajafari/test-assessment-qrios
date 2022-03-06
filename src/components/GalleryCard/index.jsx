import React from "react";
import styles from "./Gallery.module.scss";

function GalleryCard({ id, title, image, onClickImage }) {
  return (
    <div className={styles.galleryItem}>
      <div
        className={styles.imageContainer}
        onClick={() => onClickImage(id)}
        style={{ backgroundImage: `url(${image})` }}
        data-testid="gallery-item-image"
      />
      <h2>{title}</h2>
    </div>
  );
}

export default React.memo(GalleryCard);

import React from "react";
import styles from "./Gallery.module.scss";

function GalleryCard({ id, title, image, onClickImage }) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          title={title}
          alt={title}
          onClick={() => {
            console.log("12345");
            onClickImage(id);
          }}
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default React.memo(GalleryCard);

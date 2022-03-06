import React from "react";
import styles from "./Modal.module.scss";

function Modal({ title, image, description, onClickClose }) {
  const onClickBackground = (e) => {
    if (e.target.className === styles.modalWrapper) {
      onClickClose();
    }
  };

  return (
    <div className={styles.modalWrapper} onClick={onClickBackground}>
      <div className={styles.modalContainer}>
        <div>
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;

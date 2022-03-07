import React from "react";
import styles from "./Modal.module.scss";

function Modal({ title, image, description, onClickClose }) {
  const onClickBackground = (e) => {
    if (e.target.className === styles.modalWrapper) {
      onClickClose();
    }
  };

  return (
    <div className={styles.modalWrapper} onClick={onClickBackground} data-testid="close-modal">
      <div className={styles.modalContainer} data-testid="modal-container">
        <div>
          <img data-testid="modal-image" src={image} alt="" />
        </div>
        <h3 data-testid="modal-title">{title}</h3>
        <p data-testid="modal-description">{description}</p>
      </div>
    </div>
  );
}

export default Modal;

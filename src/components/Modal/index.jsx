import React from "react";

function Modal({ title, image, description }) {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Modal;

import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children}) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    document.body.classList.add('modal-open');
  
    return () => {
      mount.removeChild(el)
      document.body.classList.remove('modal-open');
    }
  }, [el, mount]);

  return createPortal(children, el)
};

export default Portal;
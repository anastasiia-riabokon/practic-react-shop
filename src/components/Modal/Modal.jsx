import {useEffect} from "react";
import css from "./Modal.module.css";

export const Modal = ({children, title = "Default modal", onClose}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div onClick={handleBackdropClick} className={css.wrapper}>
      <div className={css.content}>
        <h1>{title}</h1>
        <button className={css.btn} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;

import {useEffect} from "react";
import css from "./Modal.module.css";
import {IoMdClose} from "react-icons/io";
import {motion, AnimatePresence} from "framer-motion";

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
      <motion.div
        initial={{opacity: 0, y: 400}}
        animate={{opacity: 1, y: 0, transition: {duration: 0.5, type: "spring"}}}
        exit={{opacity: 0, y: 400, transition: {duration: 0.5}, scale: 0.5}}
        className={css.content}
      >
        <h1>{title}</h1>
        <button className={css.btn} onClick={onClose}>
          <IoMdClose />
        </button>
        {children}
      </motion.div>
    </div>
  );
};
export default Modal;

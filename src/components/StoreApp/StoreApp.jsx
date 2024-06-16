import {useState} from "react";
import productsData from "../../assets/products.json";
import {useLocalStorage} from "../../hook/useLocalStorage";
import List from "./List";
import Modal from "../Modal/Modal";
import css from "./StoreApp.module.css";

export const StoreApp = () => {
  const [products, setProducts] = useLocalStorage("products", productsData);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  const removeFromCart = (product) =>
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  return (
    <div>
      <header className={css.header}>
        <h1>Store App</h1>
        <button className={css.btn} onClick={toggleModal}>
          Cart
        </button>
      </header>
      <List products={products} />
      {isOpen && (
        <Modal onClose={toggleModal}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates veniam reprehenderit
          nisi omnis, rerum qui molestias voluptatem, repellat sed laboriosam minus, eligendi
          dolorem animi ullam accusantium. Qui ad accusamus corporis.
        </Modal>
      )}
    </div>
  );
};
export default StoreApp;

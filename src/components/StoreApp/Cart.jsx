import css from "./StoreApp.module.css";
import {AnimatePresence, motion} from "framer-motion";

export const Cart = ({cart, removeFromCart}) => {
  return (
    <div className={css.cart}>
      <p>Total: {cart.reduce((acc, item) => acc + item.price, 0)}$</p>
      <ul>
        <AnimatePresence>
          {cart.map((item) => (
            <motion.li exit={{opacity: 0, x: 100}} key={item.id}>
              <img src={item.thumbnail} alt={item.title} width={100} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button className={css.btn} onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
export default Cart;

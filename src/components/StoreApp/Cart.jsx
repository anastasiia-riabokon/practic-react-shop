import css from "./StoreApp.module.css";
import {AnimatePresence, motion} from "framer-motion";
import {HiPlus} from "react-icons/hi2";
import {HiMinus} from "react-icons/hi2";

export const Cart = ({cart, removeFromCart, increaseQty, decreaseQty}) => {
  return (
    <div className={css.cart}>
      <p>Total: {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}$</p>
      <ul>
        <AnimatePresence>
          {cart.map((item) => (
            <motion.li exit={{opacity: 0, x: 100}} key={item.id}>
              <img src={item.thumbnail} alt={item.title} width={100} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <div>
                <button onClick={() => decreaseQty(item)}>
                  <HiMinus />
                </button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item)}>
                  <HiPlus />
                </button>
              </div>
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

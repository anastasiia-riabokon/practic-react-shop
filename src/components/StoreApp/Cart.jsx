import css from "./StoreApp.module.css";

export const Cart = ({cart, removeFromCart}) => {
  return (
    <div className={css.cart}>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} width={100} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button className={css.btn} onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;

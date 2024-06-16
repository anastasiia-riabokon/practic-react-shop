import Card from "./Card";
import css from "./StoreApp.module.css";

export const List = ({products, addToCart}) => {
  return (
    <ul className={css.list}>
      {products.map((item) => (
        <Card addToCart={addToCart} key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default List;

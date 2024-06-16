import Card from "./Card";
import css from "./StoreApp.module.css";

export const List = ({products}) => {
  return (
    <ul className={css.list}>
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default List;

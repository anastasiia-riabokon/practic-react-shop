import {cutText} from "../../helpers/cutText";
import css from "./StoreApp.module.css";

export const Card = ({item}) => {
  const {thumbnail, id, title, description, price, rating} =
    item;
  return (
    <li className={css.card}>
      <img src={thumbnail} alt={title} width={200} />
      <h3>{title}</h3>
      <p>{cutText(description)}</p>
      <p>{price}$</p>
      <p>Rating: {rating}</p>
    </li>
  );
};
export default Card;

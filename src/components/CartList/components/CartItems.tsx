import React from "react";
import styles from "./CartItems.module.scss";
import { Product } from "../../../shared/types/Products";
import { useTypedDispatch } from "./../../../store/hooks";
import {
  addOne,
  removeOne,
  removeFromCart,
} from "../../../store/reducers/cartSlice";

interface Props {
  item: Product;
  id: string;
}

export const CartItem = ({ item, id }: Props) => {
  const dispatch = useTypedDispatch();
  const product = item.product;
  const quantity = item.quantity;

  const increment = () => dispatch(addOne(id));
  const decrement = () => {
    if (quantity !== 1) {
      dispatch(removeOne(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <li className={styles.cartItem}>
      <div>
        <h2>
          <strong>{quantity}</strong> {product.name}
        </h2>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <ul className={styles.itemIngredients}>
        {product.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            <p>
              <strong>{ingredient.quantity}x</strong> {ingredient.name}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
};

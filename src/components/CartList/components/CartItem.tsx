import React from "react";
import styles from "./CartItem.module.scss";
import { useTypedDispatch } from "./../../../store/hooks";
import {
  addOne,
  removeOne,
  removeFromCart,
} from "../../../store/reducers/cartSlice";
import { CartItemProps } from "../../../shared/types/Props";

export const CartItem = ({ order, id, select }: CartItemProps) => {
  const dispatch = useTypedDispatch();
  const product = order.burger;
  const quantity = order.quantity;

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
          <strong>{quantity}x</strong> {product.name}
        </h2>
        <button onClick={decrement}>-</button>
        <span onClick={select} className={styles.editOrder}>
          Edit
        </span>
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

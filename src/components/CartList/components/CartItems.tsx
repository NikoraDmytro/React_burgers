import React from "react";
import styles from "./CartItems.module.scss";
import { Burger } from "../../../shared/types/Burgers";

interface Props {
  item: Burger;
}

export const CartItem = ({ item }: Props) => {
  return (
    <li className={styles.cartItem}>
      <div>
        <h2>
          <strong>1x</strong> {item.name}
        </h2>
      </div>
      <ul className={styles.itemIngredients}>
        {item.ingredients.map((ingredient) => (
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

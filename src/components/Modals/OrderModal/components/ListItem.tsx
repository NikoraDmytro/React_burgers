import React from "react";
import styles from "./IngredientsList.module.scss";
import { BurgerIngredientsProps } from "../../../../shared/types/Props";

export const ListItem = ({
  ingredient,
  initialQuantity,
  modifier,
  changeQuantity,
}: BurgerIngredientsProps) => {
  const quantity = ingredient.quantity;

  const min = 0;
  const max = initialQuantity * 3;

  const increment = () => {
    if (quantity < max) changeQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > min) changeQuantity(quantity - 1);
  };

  return (
    <li className={styles.ingredient + modifier}>
      <span>{ingredient.name.toUpperCase()}</span>
      <div className={styles.quantity}>
        <strong>{quantity + "x"}</strong>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </li>
  );
};

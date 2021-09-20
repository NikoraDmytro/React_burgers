import React, { useState } from "react";
import styles from "./BurgerIngredient.module.scss";
import { BurgerIngredientProps } from "../../../../shared/types/Props";

export const BurgerIngredient = ({ ingredient }: BurgerIngredientProps) => {
  const [quantity, setQuantity] = useState(ingredient.quantity);

  const min = 0;
  const max = ingredient.quantity * 3;

  let modified = "";
  if (ingredient.quantity !== quantity) {
    modified = " " + styles.modified;
  }
  if (quantity === 0) {
    modified = " " + styles.empty;
  }

  const setNewValue = (value: number) => {
    if (value < min) {
      setQuantity(min);
    } else if (value > max) {
      setQuantity(max);
    } else {
      setQuantity(value);
    }
  };

  const increment = () => setNewValue(quantity + 1);
  const decrement = () => setNewValue(quantity - 1);

  return (
    <li className={styles.ingredient + modified}>
      <span>{ingredient.name.toUpperCase()}</span>
      <div className={styles.quantity}>
        <strong>{quantity + "x"}</strong>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </li>
  );
};

import React, { useState } from "react";
import styles from "./IngredientsList.module.scss";
import {
  IngredientProps,
  IngredientsListProps,
} from "../../../../shared/types/Props";

const modified = (initialValue: number, value: number) => {
  if (value === 0) {
    return " " + styles.empty;
  }
  if (initialValue !== value) {
    return " " + styles.modified;
  }
  return "";
};

const BurgerIngredient = ({ ingredient }: IngredientProps) => {
  const [quantity, setQuantity] = useState(ingredient.quantity);

  const min = 0;
  const max = ingredient.quantity * 3;

  const increment = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };

  return (
    <li className={styles.ingredient + modified(ingredient.quantity, quantity)}>
      <span>{ingredient.name.toUpperCase()}</span>
      <div className={styles.quantity}>
        <strong>{quantity + "x"}</strong>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </li>
  );
};

export const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <ul className={styles.ingredientsList}>
      {ingredients.map((ingredient) => (
        <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

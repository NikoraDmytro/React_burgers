import React, { useState } from "react";
import styles from "./OrderModal.module.scss";
import { Ingredient } from "../../../shared/types/Burgers";

interface Props {
  ingredient: Ingredient;
}

export const BurgerIngredient = ({ ingredient }: Props) => {
  const [quantity, setQuantity] = useState<number | "">(ingredient.quantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.valueAsNumber || "";
    setQuantity(newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setQuantity(0);
    }
  };

  return (
    <li>
      <div className={styles.quantity}>
        <button>-</button>
        <input
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={quantity}
        />
        <button>+</button>
      </div>
      <span>{ingredient.name}</span>
    </li>
  );
};

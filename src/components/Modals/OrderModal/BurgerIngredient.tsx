import React, { useState } from "react";
import { Ingredient } from "../../../shared/types/Burgers";

interface Props {
  ingredient: Ingredient;
}

export const BurgerIngredient = ({ ingredient }: Props) => {
  const [quantity, setQuantity] = useState<number | "">(ingredient.quantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.valueAsNumber || "";

    if (!newValue && newValue !== "") {
      setQuantity(0);
    }

    setQuantity(newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <li>
      <input
        type="number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={quantity}
      />
      <span>{ingredient.name}</span>
    </li>
  );
};

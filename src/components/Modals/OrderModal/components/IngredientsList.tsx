import React, { useContext } from "react";
import styles from "./IngredientsList.module.scss";
import { OrderContext } from "./../context";
import { ListItem } from "./ListItem";

const getModifier = (initialValue: number, value: number) => {
  if (value === 0) {
    return " " + styles.empty;
  }
  if (initialValue !== value) {
    return " " + styles.changed;
  }
  return "";
};

export const IngredientsList = () => {
  const { ingredients, initialValue, changeQuantity } = useContext(
    OrderContext
  );

  const renderIngredients = ingredients.map((ingredient, index) => {
    const initialQuantity = initialValue[index].quantity;
    const modifier = getModifier(initialQuantity, ingredient.quantity);

    return (
      <ListItem
        key={ingredient._id}
        ingredient={ingredient}
        initialQuantity={initialQuantity}
        modifier={modifier}
        changeQuantity={changeQuantity(index)}
      />
    );
  });

  return <ul className={styles.ingredientsList}>{renderIngredients}</ul>;
};

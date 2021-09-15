import React from "react";
import styles from "./OrderModal.module.scss";
import { Burger } from "../../../shared/types/Burgers";
import { BurgerIngredient } from "./BurgerIngredient";
import { Modal } from "../Modal";

type Props = {
  burger: Burger | null;
  closeModal: () => void;
};

export const OrderModal = ({ burger, closeModal }: Props) => {
  if (!burger) return null;

  return (
    <Modal closeModal={closeModal}>
      <img className={styles.burgerImage} src={burger.img} alt="Crash" />
      <h1>{burger.name}</h1>
      <ul className={styles.ingredientsList}>
        {burger.ingredients.map((ingredient) => (
          <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
        ))}
      </ul>
    </Modal>
  );
};

import React from "react";
import styles from "./OrderModal.module.scss";
import { Burger } from "../../../shared/types/Burgers";
import { BurgerIngredient } from "./components/BurgerIngredient";
import { Modal } from "../Modal";

type Props = {
  burger: Burger | null;
  closeModal: () => void;
};

export const OrderModal = ({ burger, closeModal }: Props) => {
  if (!burger) return null;

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modalContent}>
        <div className={styles.burgerDetails}>
          <h2 className={styles.title}>
            Adjust ingredients of {burger.name.toUpperCase()}
          </h2>
          <ul className={styles.ingredientsList}>
            {burger.ingredients.map((ingredient) => (
              <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
            ))}
          </ul>
        </div>
        <div className={styles.burgerDetails}>
          <div className={styles.burgerImage}>
            <img src={burger.img} alt="Crash" width={300} />
          </div>
          <h2>{burger.name.toUpperCase()}</h2>
        </div>
      </div>
    </Modal>
  );
};

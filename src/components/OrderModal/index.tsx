import React from "react";
import styles from "./Modal.module.scss";
import { Burger } from "../../shared/types/Burgers";

type Props = {
  burger: Burger | null;
  closeModal: () => void;
};

export const OrderModal = ({ burger, closeModal }: Props) => {
  if (!burger) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button className={styles.goBackButton} onClick={closeModal}>
          <img src="/images/arrow.svg" alt="Close" />
        </button>
        <img className={styles.burgerImage} src={burger.img} alt="Crash" />
        <h1>{burger.name}</h1>
        <ul className={styles.ingredientsList}>
          {burger.ingredients.map((ingredient) => (
            <li>
              <input type="number" value={ingredient.quantity} />
              <span>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

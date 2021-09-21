import React from "react";
import styles from "./OrderModal.module.scss";
import { Burger } from "../../../shared/types/Burgers";
import { IngredientsList } from "./components/IngredientsList";
import { Modal } from "../Modal";

type Props = {
  burger: Burger | null;
  closeModal: () => void;
};

export const OrderModal = ({ burger, closeModal }: Props) => {
  if (!burger) return null;

  const handleClick = () => closeModal();

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modalContent}>
        <div className={styles.ingredientsDetails}>
          <h2 className={styles.title}>
            Adjust ingredients of {burger.name.toUpperCase()}
          </h2>
          <IngredientsList ingredients={burger.ingredients} />
        </div>
        <div>
          <div className={styles.burgerImage}>
            <img src={burger.img} alt="Crash" width={300} />
          </div>
          <h2 className={styles.burgerName}>{burger.name.toUpperCase()}</h2>
          <button onClick={handleClick} className={styles.addToOrder}>
            Add to order
          </button>
        </div>
      </div>
    </Modal>
  );
};

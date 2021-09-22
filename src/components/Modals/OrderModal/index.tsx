import React from "react";
import styles from "./OrderModal.module.scss";
import { IngredientsList } from "./components/IngredientsList";
import { Modal } from "../Modal";
import { useTypedDispatch } from "../../../store/hooks";
import { OrderModalProps } from "../../../shared/types/Props";
import { addToCart } from "../../../store/reducers/cartSlice";

export const OrderModal = ({ burger, closeModal }: OrderModalProps) => {
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    dispatch(addToCart(burger));
    closeModal();
  };

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

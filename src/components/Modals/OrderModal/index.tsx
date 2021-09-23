import React, { useState } from "react";
import styles from "./OrderModal.module.scss";
import { IngredientsList } from "./components/IngredientsList";
import { Modal } from "../Modal";
import { useTypedDispatch } from "../../../store/hooks";
import { OrderModalProps } from "../../../shared/types/Props";
import { addToCart } from "../../../store/reducers/cartSlice";
import { OrderProvider } from "./context";

export const OrderModal = ({ burger, closeModal }: OrderModalProps) => {
  const initialValue = burger.ingredients;
  const [ingredients, setIngredients] = useState(initialValue);

  const dispatch = useTypedDispatch();

  const changeQuantity = (index: number) => {
    return (quantity: number) => {
      const newIngredientsList = ingredients.map((ingredient, i) =>
        i === index ? { ...ingredient, quantity } : ingredient
      );

      setIngredients(newIngredientsList);
    };
  };

  const handleClick = () => {
    dispatch(addToCart({ ...burger, ingredients }));
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <OrderProvider value={{ initialValue, ingredients, changeQuantity }}>
        <div className={styles.modalContent}>
          <div className={styles.ingredientsDetails}>
            <h2 className={styles.title}>
              Adjust ingredients of {burger.name.toUpperCase()}
            </h2>
            <IngredientsList />
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
      </OrderProvider>
    </Modal>
  );
};

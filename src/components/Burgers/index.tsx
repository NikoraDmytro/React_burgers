import React, { useState } from "react";
import { OrderModal } from "../Modals/OrderModal/index";

import { BurgersListProps } from "../../shared/types/Props";
import { Burger } from "../../shared/types/Burgers";

import styles from "./Burgers.module.scss";

export const BurgersList = ({ burgers }: BurgersListProps) => {
  const [selectedBurger, setSelectedBurger] = useState<Burger>();

  if (!burgers.length) {
    return <h1>Loading!</h1>;
  }

  const handleClick = (burger: Burger) => setSelectedBurger(burger);
  const closeModal = () => setSelectedBurger(undefined);

  const modalWindow = selectedBurger ? (
    <OrderModal burger={selectedBurger} closeModal={closeModal} />
  ) : null;

  return (
    <ul className={styles.burgersList}>
      {modalWindow}
      {burgers.map((burger) => (
        <li
          key={burger._id}
          className={styles.burger}
          onClick={() => handleClick(burger)}
        >
          <img className={styles.burgerImage} src={burger.img} alt="Crash" />
          <div className={styles.burgerInfo}>
            <p>{burger.name.toUpperCase()}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

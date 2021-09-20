import React, { useState } from "react";
import { BurgersListProps } from "../../shared/types/Props";
import styles from "./Burgers.module.scss";
import { BurgersLoader } from "./BurgerLoader";
import { OrderModal } from "../Modals/OrderModal/index";
import { Burger } from "../../shared/types/Burgers";

const Loader = () => (
  <>
    {[...new Array(10)].map((_, index) => (
      <li key={index} className={styles.burger}>
        <BurgersLoader />
      </li>
    ))}
  </>
);

export const BurgersList = ({ burgers }: BurgersListProps) => {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  const handleClick = (burger: Burger) => setSelectedBurger(burger);
  const closeModal = () => setSelectedBurger(null);

  return (
    <ul className={styles.burgersList}>
      <OrderModal burger={selectedBurger} closeModal={closeModal} />
      {burgers.length ? (
        burgers.map((burger) => (
          <li
            key={burger._id}
            className={styles.burger}
            onClick={() => handleClick(burger)}
          >
            <img src={burger.img} alt="Crash" />
            <span className={styles.burgerName}>
              {burger.name.toUpperCase()}
            </span>
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
};

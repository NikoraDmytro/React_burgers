import React from "react";
import { BurgersListProps } from "../../shared/types/Props";
import styles from "./Burgers.module.scss";
import { BurgersLoader } from "./BurgerLoader";

export const BurgersList = ({ burgers }: BurgersListProps) => {
  return (
    <ul className={styles.burgersList}>
      {burgers.length
        ? burgers.map((burger) => (
            <li key={burger._id} className={styles.burger}>
              <img src={burger.img} alt="Crush" />
              <span className={styles.burgerName}>{burger.name}</span>
            </li>
          ))
        : [...new Array(10)].map((_, index) => (
            <li key={index} className={styles.burger}>
              <BurgersLoader />
            </li>
          ))}
    </ul>
  );
};

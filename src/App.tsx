import React, { useState } from "react";
import styles from "./App.module.css";
import burgers from "./burgers.json";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);

  const increase = () => {
    if (totalCount > 99) setTotalCount(0);
    else setTotalCount(totalCount * 10 + 1);
  };

  return (
    <div>
      <header className={styles.header}>
        <div>
          <img
            src="./images/mcdonalds.svg"
            alt="Logo"
            className={styles.logo}
          />
          <h1>MC React</h1>
        </div>
        <div className={styles.cart} onClick={increase}>
          <img src="./images/shopping-cart.svg" alt="Cart" />
          <span>{totalCount > 99 ? "99+" : totalCount}</span>
        </div>
      </header>
      <ul className={styles.burgersList}>
        {burgers.map((burger) => (
          <li key={burger.id} className={styles.burger}>
            <img src={burger.img} alt="Crush" />
            <h3>{burger.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

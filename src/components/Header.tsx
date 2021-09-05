import React, { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [totalCount, setTotalCount] = useState(0);

  const increase = () => {
    if (totalCount > 99) setTotalCount(0);
    else setTotalCount(totalCount * 10 + 1);
  };

  return (
    <header className={styles.header}>
      <div>
        <img src="./images/mcdonalds.svg" alt="Logo" className={styles.logo} />
        <h1>MC React</h1>
      </div>
      <div className={styles.cart} onClick={increase}>
        <img src="./images/shopping-cart.svg" alt="Cart" />
        <span className={styles.badge}>
          {totalCount > 99 ? "99+" : totalCount}
        </span>
      </div>
    </header>
  );
};

import React from "react";
import { useTypedSelector } from "../../store/hooks";
import styles from "./Header.module.scss";

export const Header = () => {
  const totalCount = useTypedSelector((state) => state.cart.quantity);

  return (
    <header className={styles.header}>
      <div>
        <img src="./images/mcdonalds.svg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.cart}>
        {totalCount ? (
          <>
            <img src="./images/shopping-cart.svg" alt="Cart" />
            <span className={styles.badge}>
              {totalCount > 99 ? "99+" : totalCount}
            </span>
          </>
        ) : (
          <em>
            No burgers
            <br /> in the basket
          </em>
        )}
      </div>
    </header>
  );
};

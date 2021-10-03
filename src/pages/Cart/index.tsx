import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { CartList } from "./../../components/CartList/index";
import { useTypedSelector } from "../../store/hooks";

export const CartPage = () => {
  const totalQuantity = useTypedSelector((state) => state.cart.quantity);

  return (
    <div className={styles.cart}>
      <Link className={styles.goBack} to="/">
        <span>{"\u2190"}</span> Go back
      </Link>
      <h1 className={styles.title}>Your order</h1>
      <button className={styles.makeOrderButton}>
        Order products ({totalQuantity})
      </button>
      <CartList />
    </div>
  );
};

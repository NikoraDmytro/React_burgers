import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { CartList } from "./../../components/CartList/index";

export const CartPage = () => {
  return (
    <div className={styles.cart}>
      <Link className={styles.goBack} to="/">
        <span>{"\u2190"}</span> Go back
      </Link>
      <h1 className={styles.title}>Your order</h1>
      <CartList />
    </div>
  );
};

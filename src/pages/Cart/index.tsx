import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { CartList } from "./../../components/CartList/index";
import { useTypedSelector } from "../../store/hooks";
import { useTypedDispatch } from "./../../store/hooks";
import { clearCart } from "../../store/reducers/cartSlice";

const address = "http://localhost:5000/order";

export const CartPage = () => {
  const totalQuantity = useTypedSelector((state) => state.cart.totalQuantity);
  const order = useTypedSelector((state) => state.cart.burgers);
  const dispatch = useTypedDispatch();

  const MakeOrder = async () => {
    const response = await fetch(address, {
      method: "POST",
      body: JSON.stringify(Object.values(order)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      dispatch(clearCart());
    } else {
      console.log(response);
    }
  };

  return (
    <div className={styles.cart}>
      <Link className={styles.goBack} to="/">
        <span>{"\u2190"}</span> Go back
      </Link>
      <h1 className={styles.title}>Your order</h1>
      <CartList />
      <button onClick={MakeOrder} className={styles.makeOrderButton}>
        Order products ({totalQuantity})
      </button>
    </div>
  );
};

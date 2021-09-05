import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

interface Burger {
  _id: string;
  name: string;
  ingredients: Array<{
    _id: string;
    name: string;
    quantity: number;
  }>;
  img: string;
}

const address = "http://localhost:5000";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [burgers, setBurgers] = useState<Burger[]>();

  useEffect(() => {
    async function fetchBurgers() {
      const response = await fetch(address);
      const burgers: Burger[] = await response.json();

      setBurgers(burgers);
    }

    fetchBurgers();
  }, []);

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
      {burgers ? (
        <ul className={styles.burgersList}>
          {burgers.map((burger) => (
            <li key={burger._id} className={styles.burger}>
              <img src={burger.img} alt="Crush" />
              <h3>{burger.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

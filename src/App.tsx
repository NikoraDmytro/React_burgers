import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { Header } from "./components/Header";
import { Burger } from "./shared/types/Burgers";

const address = "http://localhost:5000";

export default function App() {
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    async function fetchBurgers() {
      const response = await fetch(address);
      const burgers: Burger[] = await response.json();

      setBurgers(burgers);
    }

    fetchBurgers();
  }, []);

  return (
    <div>
      <Header />
      {burgers.length ? (
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

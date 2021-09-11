import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { Header } from "./components/Header/index";
import { BurgersList } from "./components/Burgers/index";
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
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Burgers Menu</h1>
        <BurgersList burgers={burgers} />
      </div>
    </div>
  );
}

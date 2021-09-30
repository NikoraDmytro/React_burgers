import React, { useEffect, useState } from "react";

import { Burger } from "../../shared/types/Burgers";

import styles from "./Products.module.scss";

import { BurgersList } from "../../components/Burgers";

const address = "http://localhost:5000";

export const ProductsPage = () => {
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
    <>
      <h1 className={styles.title}>Burgers menu</h1>
      <BurgersList burgers={burgers} />
    </>
  );
};

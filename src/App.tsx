import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";

import { Header } from "./components/Header/index";
import { ProductsPage } from "./pages/Products/index";
import { OrdersPage } from "./pages/index";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className={styles.mainContent}>
          <Switch>
            <Route path="/" exact>
              <ProductsPage />
            </Route>
            <Route path="/orders">
              <OrdersPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

import { ReactNode } from "react";
import { Burger, Ingredient } from "./Burgers";

export type BurgersListProps = {
  burgers: Burger[];
};

export type BurgerModalProps = {
  burger: Burger | null;
  closeModal: () => void;
};

export type ModalProps = {
  closeModal: () => void;
  children?: ReactNode;
};

export type BurgerIngredientProps = {
  ingredient: Ingredient;
};

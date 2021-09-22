import { ReactNode } from "react";
import { Burger, Ingredient } from "./Burgers";

export type BurgersListProps = {
  burgers: Burger[];
};

export type OrderModalProps = {
  burger: Burger;
  closeModal: () => void;
};

export type ModalProps = {
  closeModal: () => void;
  children?: ReactNode;
};

export type IngredientsListProps = {
  ingredients: Ingredient[];
};

export type IngredientProps = {
  ingredient: Ingredient;
};

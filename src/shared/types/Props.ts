import { ReactNode } from "react";
import { Burger, Ingredient } from "./Burgers";
import { UserOrder } from "./Cart";

export type BurgersListProps = {
  burgers: Burger[];
};

export type OrderModalProps = {
  burger: Burger;
  id?: string;
  closeModal: () => void;
};

export type ModalProps = {
  closeModal: () => void;
  children?: ReactNode;
};

export type BurgerIngredientsProps = {
  ingredient: Ingredient;
  initialQuantity: number;
  changeQuantity: (quantity: number) => void;
  modifier: string;
};

export type CartItemProps = {
  order: UserOrder;
  select: () => void;
  id: string;
};

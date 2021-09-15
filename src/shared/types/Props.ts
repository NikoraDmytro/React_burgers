import { ReactNode } from "react";
import { Burger } from "./Burgers";

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

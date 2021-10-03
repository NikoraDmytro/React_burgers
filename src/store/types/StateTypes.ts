import { Product } from "../../shared/types/Products";

export type CartState = {
  totalQuantity: number;
  products: {
    [id: string]: Product;
  };
};

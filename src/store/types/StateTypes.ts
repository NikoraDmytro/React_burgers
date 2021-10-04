import { UserOrder } from "../../shared/types/Cart";

export type CartState = {
  totalQuantity: number;
  burgers: {
    [id: string]: UserOrder;
  };
};

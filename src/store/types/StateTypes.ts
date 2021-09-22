import { Burger } from "../../shared/types/Burgers";

export type CartState = {
  quantity: number;
  burgers: { [id: string]: Burger };
};

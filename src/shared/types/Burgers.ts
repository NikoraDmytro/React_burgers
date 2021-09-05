export type Ingredient = {
  _id: string;
  name: string;
  quantity: number;
};

export type Burger = {
  _id: string;
  name: string;
  ingredients: Ingredient[];
  img: string;
};

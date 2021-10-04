import React, { useState } from "react";
import { Burger } from "../../shared/types/Burgers";
import { useTypedSelector } from "../../store/hooks";
import { CartItem } from "./components/CartItem";
import { OrderModal } from "./../Modals/OrderModal/index";

export const CartList = () => {
  const [toEdit, setToEdit] = useState<{ id: string; burger: Burger }>();
  const cart = useTypedSelector((state) => state.cart);

  const close = () => setToEdit(undefined);
  const editModal = toEdit ? (
    <OrderModal id={toEdit.id} burger={toEdit.burger} closeModal={close} />
  ) : null;

  return (
    <ul>
      {editModal}
      {Object.entries(cart.burgers).map(([id, order]) => {
        const selectForEditing = () => {
          setToEdit({ id, burger: order.burger });
        };

        return (
          <CartItem key={id} order={order} select={selectForEditing} id={id} />
        );
      })}
    </ul>
  );
};

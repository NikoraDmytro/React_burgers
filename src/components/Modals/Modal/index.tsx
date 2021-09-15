import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

import { ModalProps } from "../../../shared/types/Props";

const portalContainer = document.getElementById("modal");

const Content = (props: ModalProps) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button className={styles.closeModalButton} onClick={props.closeModal}>
          <img src="/images/arrow.svg" alt="Close" />
        </button>
        {props.children}
      </div>
    </div>
  );
};

export const Modal = (props: ModalProps) => {
  if (!portalContainer) return <Content {...props} />;

  return ReactDOM.createPortal(<Content {...props} />, portalContainer);
};

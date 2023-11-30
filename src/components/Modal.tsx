import React from "react";
import styles from "@/styles/Modal.module.scss";

export interface ModalProps {
  active: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, children }: ModalProps) => {
  return (
    <section className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={active ? `${styles.modal__content} ${styles.active}` : styles.modal__content}>{children}</div>
    </section>
  );
};

export default Modal;

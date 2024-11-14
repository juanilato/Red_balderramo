import React from "react";
import styles from "./styles.module.scss";
interface DeleteUserButtonProps {
  onClick: () => void; // Callback que se ejecutará al hacer clic
  children: React.ReactNode; // Contenido del botón
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.borrar} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteUserButton;

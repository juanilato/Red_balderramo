// SaveChangesButton.tsx
import React from 'react';
import styles from "./styles.module.scss";
interface SaveChangesButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className={styles.guardar} onClick={onClick} disabled={disabled}>
      Guardar Cambios
    </button>
  );
};

export default SaveChangesButton;

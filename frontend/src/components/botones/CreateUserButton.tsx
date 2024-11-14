import React from 'react';
import styles from './styles.module.scss';

interface CreateUserButtonProps {
  onClick: () => void;
}

const CreateUserButton: React.FC<CreateUserButtonProps> = ({ onClick }) => {
  return <button className={styles.crear} onClick={onClick}>Crear Usuario</button>;
};

export default CreateUserButton;

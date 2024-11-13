// components/BarraDeNavegacion.tsx
import React from 'react';
import BotonInicio from './botoninicio/BotonInicio';
import styles from './styles.module.scss';

const BarraDeNavegacion: React.FC = () => {
  return (
    <nav className={styles.barraSuperior}>
      <div className={styles.botonInicioContainer}>
        <BotonInicio />
      </div>
    </nav>
  );
};

export default BarraDeNavegacion;

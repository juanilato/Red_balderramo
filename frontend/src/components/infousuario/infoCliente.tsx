import React from 'react';
import styles from './styles.module.scss'; // Asegúrate de que los estilos estén bien importados

const ClientInfo = ({ clientData, isLoading = false }: { clientData: any; isLoading?: boolean }) => {
  return (
    <div>
      <h2>Usuario</h2>
      <div className={styles.fieldRow}>
        <strong>Nombre:</strong>
        {/* Si isLoading es true, muestra el efecto de carga solo en el valor */}
        <p className={isLoading ? styles.loadingField : ""}>
          {isLoading ? "" : clientData?.usuario}
        </p>
      </div>
      <div className={styles.fieldRow}>
        <strong>Rol:</strong>
        <p className={isLoading ? styles.loadingField : ""}>
          {isLoading ? "" : clientData?.rol}
        </p>
      </div>
    </div>
  );
};

export default ClientInfo;

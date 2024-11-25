import React from 'react';
import { useClientData } from '../../context/ClientDataProvider';
import Caja from '../botones/botonredireccionar';
import styles from './styles.module.scss';

const CajaBotones: React.FC = () => {
  const { clientData, loading } = useClientData();

  return (
    <div className={styles.cajagrande}>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <Caja label="Crear tarea" path="/dashboard/jefe/crearTarea" />
          <Caja label="Ver tareas" path="/dashboard/vertarea" />
          <Caja label="otro" path="/ruta2" />

          {clientData?.rol === 'jefe' && (
            <Caja label="Gestionar usuarios" path="/dashboard/gestionusuarios" />
          )}
        </>
      )}
    </div>
  );
};

export default CajaBotones;

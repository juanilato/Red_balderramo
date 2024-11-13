// CajaBotones.tsx
import React from 'react';
import Caja from '../boton/Caja'; // Asegúrate de que la ruta es correcta
import styles from './styles.module.scss';

interface CajaBotonesProps {
  clientData: { rol: string } | null; // Asegúrate de que el tipo coincide con el de clientData en el componente principal
}

const CajaBotones: React.FC<CajaBotonesProps> = ({ clientData }) => {
  return (
    <div className={styles.cajagrande}>
      <Caja label="Crear tarea" path="/ruta1" />
      <Caja label="Ver tareas" path="/ruta2" />
      <Caja label="otro" path="/ruta2" />
      

      {/* Caja 3, solo visible para usuarios con rol de "jefe" */}
      {clientData?.rol === 'jefe' && (
        <Caja label="Gestionar usuarios" path="/ruta3" />
      )}
    </div>
  );
};

export default CajaBotones;

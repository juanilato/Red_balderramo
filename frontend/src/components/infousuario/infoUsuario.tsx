"use client"
import React from 'react';
import ClientInfo from './infoCliente'; // Asegúrate de tener este componente disponible
import { SubmitButtom } from './SubmitButtom'; // Importación nombrada


interface InfoUsuarioProps {
  clientData: { rol: string; [key: string]: any }; // Define la estructura de clientData según sea necesario
  signOut: () => void;
}

const InfoUsuario: React.FC<InfoUsuarioProps> = ({ clientData, signOut }) => {
  return (
    <div>
      {clientData && (
        <>
          <ClientInfo clientData={clientData} />
          
        </>
      )}
      <SubmitButtom buttonText="Cerrar sesion" onClick={signOut}>
        Salir
      </SubmitButtom>
    </div>
  );
};

export default InfoUsuario;

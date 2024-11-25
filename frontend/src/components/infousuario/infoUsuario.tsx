import React, { useState, useEffect } from 'react';
import ClientInfo from './infoCliente'; 
import { SubmitButtom } from './SubmitButtom'; 

interface InfoUsuarioProps {
  clientData: { rol: string; [key: string]: any }; 
  signOut: () => void;
}

const InfoUsuario: React.FC<InfoUsuarioProps> = ({ clientData, signOut }) => {
  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga de datos
  useEffect(() => {
    if (clientData) {
      setIsLoading(false); 
    }
  }, [clientData]);

  return (
    <div>
      <ClientInfo clientData={clientData} isLoading={isLoading} />
      <SubmitButtom buttonText="Cerrar sesión" onClick={signOut}>
        Salir
      </SubmitButtom>
    </div>
  );
};

export default InfoUsuario;

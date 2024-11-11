"use_client";

// /components/Dashboard/ClientInfo.js
const ClientInfo = ({ clientData }) => {
    return (
      <div>
        <h2>Tu info</h2>
        <p><strong>Nombre:</strong> {clientData.usuario}</p>
        <p><strong>Rol:</strong> {clientData.rol}</p>
        {/* Agrega más campos según la estructura de tu modelo de datos */}
      </div>
    );
  };
  
  export default ClientInfo;
  
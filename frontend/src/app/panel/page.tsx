"use client"

// src/app/panel/page.tsx
import { useEffect, useState } from 'react';

interface DashboardProps {
  rol: string | null;
}

const Dashboard = () => {
  const [rol, setRol] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Llamada a la API del backend para verificar el token y obtener el rol
    const checkAuthentication = async () => {
      try {
        const res = await fetch('../api/verify-user.tsx', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`, // Extrae el token de las cookies
          },
        });
        const data = await res.json();
        console.log("Datos de usuario:", data);
    
        if (data.rol) {
          setRol(data.rol);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Error de autenticación:', err);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  if (!isAuthenticated) {
    return <p>No autorizado</p>;
  }

  return (
    <div style={{ backgroundColor: rol === 'jefe' ? 'green' : 'red', color: 'white' }}>
      <h1>{rol === 'jefe' ? 'Bienvenido, Jefe' : 'Bienvenido, Empleado'}</h1>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import styles from './NotificationPopup.module.scss'; // Ensure your styles are correct

interface NotificationPopupProps {
  notification: {
    id: number;
    message: string;
    read?: boolean;
  };
  onClick: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ notification, onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Función para ocultar la notificación después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Ocultar la notificación después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente
  }, []);

  return (
    <div
      className={`${styles['notification-popup']} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={onClick}
    >
      <div className={styles['notification-popup-message']}>
        {notification.message}
      </div>
    </div>
  );
};

export default NotificationPopup;


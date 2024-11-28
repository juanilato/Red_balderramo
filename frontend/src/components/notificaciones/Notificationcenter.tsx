import React, { useState } from 'react';
import styles from './Notificationcenter.module.scss'; // Importar el archivo de estilos
import 'font-awesome/css/font-awesome.min.css';

interface NotificationCenterProps {
  notifications: { id: number; message: string; read?: boolean }[];
  removeNotification: (id: number) => void;
  openNotification: (id: number) => void;
  unreadCount: number;
  isVisible: boolean; 
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  removeNotification,
  openNotification,
  unreadCount,
  isVisible,
  setIsVisible, 
}) => {
  const toggleVisibility = () => {
    if (notifications.length > 0) {
      setIsVisible(!isVisible); // Alterna el estado de visibilidad
    }
  };

  return (
    <div className={`${styles['notification-center']} ${isVisible ? styles.show : ''}`}>
      {/* Botón de notificación (con campana y contador) */}
      <button onClick={toggleVisibility} className={styles['notification-counter']}>
        <i className="fa fa-bell" /> {/* Icono de campana, puedes usar cualquier librería como FontAwesome */}
        {unreadCount > 0 && <span>{unreadCount}</span>}
      </button>

      {/* Contenedor de las notificaciones */}
      <div className={styles['notifications-container']}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styles['notification-item']} ${notification.read ? '' : styles.unread}`}
            onClick={() => openNotification(notification.id)}
          >
            <div>{notification.message}</div>
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                removeNotification(notification.id);
              }}
              className={styles['delete-button']}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;


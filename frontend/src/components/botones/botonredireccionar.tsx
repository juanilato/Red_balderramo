"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

interface CajaProps {
  label: string;
  path: string;
}

const Caja: React.FC<CajaProps> = ({ label, path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button className={styles.caja} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Caja;

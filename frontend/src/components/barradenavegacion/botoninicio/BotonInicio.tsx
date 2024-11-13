// components/BotonInicio.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './styles.module.scss';

const BotonInicio: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <button onClick={handleClick} className={styles.botonInicio}>
      <Image src="/logoredbalderramo.png" alt="Inicio" width={200} height={200} />
    </button>
  );
};

export default BotonInicio;

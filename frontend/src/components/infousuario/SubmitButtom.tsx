import React from 'react'
import {Loader} from '../iniciodesesion/components/Loader/index'
import styles from './styles.module.scss'

 interface SubmitButtomProps{
    buttonText: string;
    isLoading?: boolean;
    children: React.ReactNode;
    onClick?: () => void; 
    
 }


export const SubmitButtom = ({ buttonText, isLoading, onClick }: SubmitButtomProps) => {
    return (
      <button className={styles.submitButton} onClick={onClick} disabled={isLoading} >
      {isLoading ? <Loader size={25} /> : buttonText}
      </button>
    );
  };
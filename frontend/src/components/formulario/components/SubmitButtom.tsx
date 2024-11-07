import React from 'react'
import { Loader } from './Loader'
import styles from './styles.module.scss'

 interface SubmitButtomProps{
    buttonText: string
    isLoading?: boolean
 }

 export function SubmitButtom({buttonText, isLoading}:SubmitButtomProps){
    return(
         <button className={styles.submitButton} type='submit' disabled={isLoading}>
            {isLoading ? <Loader /> : buttonText}
         </button>
    )
 }
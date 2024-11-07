import styles from "./styles.module.scss"
import React from "react";

export const Loader=({size=25}: {size?:number})=>{
    return (
        <div style={{width: size, height: size}} className={styles.spinner}></div>
    );
};
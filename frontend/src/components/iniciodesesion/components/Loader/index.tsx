"use client";
import styles from "./styles.module.scss";
import React from "react";

export const Loader = ({ size = 30 }: { size?: number }) => {
  return (
    <div
      style={{ width: size, height: size, borderWidth: size * 0.15 }}
      className={styles.spinner}
    ></div>
  );
};

import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.noDataWrapper}>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
        <h2 className={styles.noData}>Loading</h2>
      </div>
    </div>
  );
};

export default Loader;

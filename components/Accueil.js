import React from "react";
import styles from"../styles/modules/Accueil.module.css"

const Accueil = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headTitle}>
        <h1>Charles Bréton</h1>
        <h2>Développeur Front-end</h2>
      </div>
      <button styles={styles.downloadButton}>
        Télécharger le CV
      </button>
    </div>
  );
};

export default Accueil;

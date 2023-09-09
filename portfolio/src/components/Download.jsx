import React from "react";
import styles from "./Download.module.scss";

const Download = ({ state }) => {
  return (
    <div className={styles.containerDownload}>
      <a
        href={state ? "CV_Francisco_Tovar.pdf" : "CV_Francisco_Tovar.pdf"}
        download
      >
        {state ? "Download CV" : "Descargar CV"}
      </a>
    </div>
  );
};

export default Download;

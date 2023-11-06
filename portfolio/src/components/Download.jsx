import React from "react";
import styles from "./Download.module.scss";
import spanishFile from "./CV_Francisco_Tovar.pdf"
import englishFile from "./CVI_Francisco_Tovar.pdf"

const Download = ({ state }) => {
  return (
    <div className={styles.containerDownload}>
      <a
        href={state ? englishFile : spanishFile}
        download
      >
        {state ? "Download CV" : "Descargar CV"}
      </a>
    </div>
  );
};

export default Download;

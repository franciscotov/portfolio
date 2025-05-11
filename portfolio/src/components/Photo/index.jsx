import React from "react";
import Download from "@/components/Download";
import styles from "./styles.module.scss";
import img from "@/assets/img/photo.JPG";

const Photo = () => {
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.photoContainer}>
          <img
            src={img}
            alt=""
            className={styles.photo}
          />
          <Download />
        </div>
      </div>
    </>
  );
};

export default Photo;

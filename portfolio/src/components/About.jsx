import React from "react";
import styles from "./About.module.scss";
import personalData from "../personalData.json";

const About = ({ state }) => {
  let data = state ? personalData[0] : personalData[1];
  return (
    <section className={styles.container} id="About">
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h2>{state ? "About" : "Acerca de mi"}</h2>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.containerFirstDescription}>
          <span className={styles.fristDescription}>
            {data.firstAboutDescription}
          </span>
        </div>
        <div className={styles.containerSecondDescription}>
          <span className={styles.secondDescription}>
            {data.secondAboutDescription}
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;

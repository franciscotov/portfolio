import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationModulesKeys, translationKeys } from "@/Int/constants";
import { sectionKeys } from "@/components/common/constants";

const About = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { about } = translationKeys;

  return (
    <section className={styles.container} id={sectionKeys.about}>
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h1>{t(about.title)}</h1>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.containerFirstDescription}>
          <span className={styles.fristDescription}>{t(about.firstDescription)}</span>
        </div>
        <div className={styles.containerSecondDescription}>
          <span className={styles.secondDescription}>{t(about.secondDescription)}</span>
        </div>
      </div>
    </section>
  );
};

export default About;

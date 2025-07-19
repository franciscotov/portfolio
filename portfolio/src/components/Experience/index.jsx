import React from "react";
import styles from "./styles.module.scss";
import Accordeon from "@/components/Accordion";

import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Experience = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { experience } = translationKeys;

  return (
    <section className={styles.container}>
      <div className={styles.elements} id="Experience">
        <h1>{t(experience.title)}</h1>
        <div className={styles.line}></div>
        <div className={styles.acordeon}>
          <Accordeon />
        </div>
      </div>
    </section>
  );
};

export default Experience;

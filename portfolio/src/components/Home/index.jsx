import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Home = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { home, data } = translationKeys;

  return (
    <section className={styles.container} id="Home">
      <div className={styles.containerTitle}>
        <p className={styles.jobDescription}>{t(home.jobDescription)}</p>
        <h1 className={styles.title}>
          <span>{t(data.firstName)}</span>
          <span>{t(data.lastName)}</span>
        </h1>
        <div className={styles.containerDescription}>
          <p className={styles.nowDescription}>{t(home.nowDescription)}</p>
          <p className={styles.secondNowDescription}>
            {t(home.secondNowDescription)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

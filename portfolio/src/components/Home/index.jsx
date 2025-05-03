import React from "react";
import styles from "./styles.module.scss";
import Photo from "@/components/Photo";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Home = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { home, data } = translationKeys;

  return (
    <section className={styles.container} id="Home">
      <Photo />
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h1>
            {t(home.greeting)}
            <br />
            {t(home.description) + t(data.firstName)}
            <br />
            {t(data.lastName)}
          </h1>
        </div>
        <div className={styles.containerDescription}>
          <span className={styles.span}>
            {t(home.a)}
            <b>{t(home.secondDescription)}</b>
            {t(home.homeDescription)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import styles from "./styles.module.scss";
import data from "../../projects.json";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import countriesApp from "@/assets/img/countriesApp.jpg";
import { languagesKeys } from "@/components/common/constants";

const Portfolio = () => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { porfolio } = translationKeys;
  const isInEnglish = i18n.language === languagesKeys.en;
  let dat = isInEnglish ? data[0] : data[1];

  return (
    <section className={styles.container} id="Portfolio">
      <div className={styles.elements}>
        <h1>{t(porfolio.title)}</h1>
        <div className={styles.line}></div>
      </div>
      {dat.map((e, key) => (
        <div key={key}>
          <div className={styles.cart}>
            <div className={styles.info}>
              <div className={styles.texto}>
                <h2>{e.name}</h2>
                <span className={styles.description}>{e.description}</span>
              </div>
            </div>
            {e.img ? (
              <div className={styles.imagen}>
                <img
                  src={countriesApp}
                  alt="Countries App"
                />
              </div>
            ) : (
              <div className={styles.imagen}>
                <video controls>
                  <source
                    src={
                      "/codebakery_ecommerce.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          <div className={styles.botones}>
            <button>
              <a href={e.deploy} target="_blank" rel="noreferrer">
              {t(porfolio.demo)}
              </a>
            </button>
            <button className={styles.repo}>
              <a href={e.github} target="_blank" rel="noreferrer">
              {t(porfolio.repository)}
              </a>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;

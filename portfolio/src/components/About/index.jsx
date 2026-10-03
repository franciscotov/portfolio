import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationModulesKeys, translationKeys } from "@/Int/constants";
import { sectionKeys } from "@/components/common/constants";
import photo from "@/assets/img/photo.JPG";

const About = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { about } = translationKeys;

  return (
    <section
      className={styles.about}
      id={sectionKeys.about}
      aria-labelledby="about-title"
    >
      <h2 id="about-title">{t(about.title)}</h2>

      <div className={styles.content}>
        <img
          className={styles.photo}
          src={photo}
          alt={t(about.photoAlt)}
          width="291"
          height="280"
          loading="lazy"
        />
        <div className={styles.text}>
          <p className={styles.lead}>{t(about.firstDescription)}</p>
          <p className={styles.body}>{t(about.secondDescription)}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

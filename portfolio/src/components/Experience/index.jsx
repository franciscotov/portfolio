import React from "react";
import styles from "./styles.module.scss";
import experienceData from "@/data.js";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { languagesKeys, sectionKeys } from "@/components/common/constants";

const Experience = () => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { experience } = translationKeys;
  const entries =
    i18n.language === languagesKeys.es ? experienceData[1] : experienceData[0];

  return (
    <section
      className={styles.experience}
      id={sectionKeys.experience}
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title">{t(experience.title)}</h2>

      <ol className={styles.timeline}>
        {entries.map((entry) => {
          const titleIncludesPlace = entry.title
            .toLowerCase()
            .includes(entry.university.toLowerCase());

          return (
            <li className={styles.entry} key={`${entry.title}-${entry.date}`}>
              <p className={styles.date}>{entry.date.replace("-", "–")}</p>
              <div className={styles.body}>
                <h3>{entry.title}</h3>
                {titleIncludesPlace ? null : (
                  <p className={styles.place}>{entry.university}</p>
                )}
                <p className={styles.description}>{entry.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;

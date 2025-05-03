import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Skills = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { skills } = translationKeys;

  let skillsArr = [
    { name: t(skills.webDevelopment), percentage: 80 },
    { name: t(skills.algorithms), percentage: 85 },
    { name: t(skills.electonics), percentage: 70 },
    { name: t(skills.teaching), percentage: 80 },
    { name: t(skills.teamwork), percentage: 100 },
    { name: t(skills.leadership), percentage: 80 },
  ];

  return (
    <section className={styles.container} id="Skills">
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h2>{t(skills.title)}</h2>
        </div>
        <div className={styles.vl}></div>

        <div className={styles.containerSkills}>
          {skillsArr.map((ele, i) => {
            return (
              <div width="100%" className={styles.containerSkill} key={i}>
                <div className={styles.containerVar}>
                  <div
                    style={{ width: `${ele.percentage}%` }}
                    className={styles.skillPercentage}
                  >
                    {ele.name.toLocaleUpperCase()}
                  </div>
                  <div
                    style={{ width: `${100 - ele.percentage}%` }}
                    className={styles.line}
                  ></div>
                </div>
                <span
                  className={styles.percentage}
                >{`${ele.percentage}%`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

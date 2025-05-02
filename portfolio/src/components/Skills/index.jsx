import React from "react";
import styles from "./styles.module.scss";
const Skills = ({ state }) => {

  let skills = [
    { name: state ? "Web Development" : "Desarrollo Web", percentage: 80 },
    { name: state ? "Algorithms" : "Algoritmos", percentage: 85 },
    { name: state ? "Electonics" : "Electrónica", percentage: 70 },
    { name: state ? "Teaching" : "Enseñanza", percentage: 80 },
    { name: state ? "Teamwork" : "Trabajo en equipo", percentage: 100 },
    { name: state ? "Leadership" : "Liderazgo", percentage: 80 },
  ];

  return (
    <section className={styles.container} id="Skills">
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h2>{state ? "Skills" : "Habilidades"}</h2>
        </div>
        <div className={styles.vl}></div>

        <div className={styles.containerSkills}>
          {skills.map((ele, i) => {
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

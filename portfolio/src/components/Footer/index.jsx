import React from "react";
import styles from "./styles.module.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import personalData from "@/personalData.js";

const Footer = ({ state }) => {
  return (
    <section className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.icon}>
          <a
            href="https://www.linkedin.com/in/franciscotov/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption className={styles.size} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://github.com/franciscotov"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.size} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.freecodecamp.org/franciscotov"
            target="_blank"
            rel="noreferrer"
          >
            <FaFreeCodeCamp className={styles.size} />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>
          © 2025 {state ? "Developed by " : "Desarrollado por"} Franciscotov
          {personalData.nickName}
        </span>
      </div>
    </section>
  );
};

export default Footer;

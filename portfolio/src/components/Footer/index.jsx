import React from "react";
import styles from "./styles.module.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaFreeCodeCamp, FaLaptop } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { socialMediaUrls } from "@/components/common/constants";

const Footer = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { footer } = translationKeys;

  return (
    <section className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.icon}>
          <a href={socialMediaUrls.linkedin} target="_blank" rel="noreferrer">
            <GrLinkedinOption className={styles.size} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href={socialMediaUrls.github} target="_blank" rel="noreferrer">
            <FaGithub className={styles.size} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href={socialMediaUrls.freeCodeCamp}
            target="_blank"
            rel="noreferrer"
          >
            <FaFreeCodeCamp className={styles.size} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href={socialMediaUrls.leetcode} target="_blank" rel="noreferrer">
            <FaLaptop className={styles.size} />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>{t(footer.develpedBy)}</span>
      </div>
    </section>
  );
};

export default Footer;

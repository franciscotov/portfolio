import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Footer = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { footer } = translationKeys;

  return (
    <footer className={styles.footer}>
      <p>{t(footer.develpedBy, { year: new Date().getFullYear() })}</p>
    </footer>
  );
};

export default Footer;

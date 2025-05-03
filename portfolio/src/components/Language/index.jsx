import React from "react";
import { MdLanguage } from "react-icons/md";
import styles from "./styles.module.scss";
import { languagesKeys } from "../common/constants";
import { useTranslation } from "react-i18next";
import { translationModulesKeys } from "@/Int/constants";

const Language = () => {
  const { i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const currentLanguage = i18n.language;
  const handleChangeLanguage = () => {
    if (currentLanguage === languagesKeys.es) {
      i18n.changeLanguage(languagesKeys.en);
    } else {
      i18n.changeLanguage(languagesKeys.es);
    }
  };

  return (
    <div onClick={handleChangeLanguage} className={styles.red}>
      {currentLanguage.toLocaleUpperCase()}{" "}
      <MdLanguage className={styles.icon} />
    </div>
  );
};
export default Language;

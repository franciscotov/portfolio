import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Resume = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { resume } = translationKeys;

  return (
    <div className={styles.containerResume}>
      <a href={resume.fileURL}>{t(resume.description)}</a>
    </div>
  );
};

export default Resume;

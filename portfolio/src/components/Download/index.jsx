import React from "react";
import styles from "./styles.module.scss";
import spanishFile from "../CV_Francisco_Tovar.pdf";
import englishFile from "../CVI_Francisco_Tovar.pdf";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { languagesKeys } from "@/components/common/constants";

const Download = ({ state }) => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { download } = translationKeys;
  const isInEnglish = i18n.language === languagesKeys.en;

  return (
    <div className={styles.containerDownload}>
      <a
        href={isInEnglish ? englishFile : spanishFile}
        download={t(download.fileName)}
      >
        {t(download.description)}
      </a>
    </div>
  );
};

export default Download;

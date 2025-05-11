import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { FiAlertOctagon, FiAlertCircle } from "react-icons/fi";
import { alertType } from "../constants";

const Alert = ({ type }) => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { alert } = translationKeys;
  const isSuccess = type === alertType.success;

  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.icon}>
        {isSuccess ? (
          <FiAlertCircle className={`${styles.iconError}`} />
        ) : (
          <FiAlertOctagon className={`${styles.iconSuccess}`} />
        )}
      </div>
      <div className={styles.message}>
        {isSuccess ? t(alert.success) : t(alert.error)}
      </div>
    </div>
  );
};

export default Alert;

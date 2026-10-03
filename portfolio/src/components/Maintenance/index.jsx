import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { contactEmail } from "@/components/common/constants";

function Maintenance() {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { data, maintenance } = translationKeys;

  return (
    <main className={styles.maintenance}>
      <p className={styles.name}>
        {t(data.firstName)} {t(data.lastName)}
      </p>
      <h1>{t(maintenance.title)}</h1>
      <p className={styles.body}>{t(maintenance.body)}</p>
      <p className={styles.body}>
        {t(maintenance.contact)}{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </main>
  );
}

export default Maintenance;

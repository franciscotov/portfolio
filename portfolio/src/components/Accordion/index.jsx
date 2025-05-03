import React, { useState } from "react";
import data from "@/data.js";
import styles from "./styles.module.scss";
import { translationModulesKeys } from "@/Int/constants";
import { useTranslation } from "react-i18next";
import { languagesKeys } from "../common/constants";

const Accordion = () => {
  const { i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const isInEnglish = i18n.language === languagesKeys.en;
  let indexPlus,
    dat = isInEnglish ? data[0] : data[1];
  const [active, setActive] = useState("");

  const eventHandler = (e, index) => {
    e.preventDefault();
    active === index ? setActive("") : setActive(index);
  };

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  return (
    <>
      <form>
        {dat.map((tab, index) => (
          <div key={`acc-${index}`} className={styles.deslizar}>
            <h3>
              <button
                onClick={(e) => eventHandler(e, index)}
                className={active === index ? "active" : "inactive"}
                aria-expanded={active === index ? "true" : "false"}
                aria-controls={"sect-" + indexCount(index)}
                aria-disabled={active === index ? "true" : "false"}
                tabIndex={indexCount(index)}
              >
                <span className={styles.titlewrapper}>
                  {tab.title}
                  <span
                    className={active === index ? styles.plus : styles.minus}
                  ></span>
                </span>
              </button>
            </h3>
            <div
              id={"sect-" + indexCount(index)}
              className={
                active === index ? styles.panelopen : styles.panelclose
              }
            >
              <p className={styles.date}>{`${tab.university} ${tab.date} `}</p>
              <p>{tab.description}</p>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

export default Accordion;

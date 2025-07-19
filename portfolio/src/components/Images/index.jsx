import React from "react";
import styles from "./styles.module.scss";
import web_development from "@/assets/images/web_development.png";
import sports from "@/assets/images/sports.png";
import responsive from "@/assets/images/responsive.png";
import atom from "@/assets/images/atom.png";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Images = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { images } = translationKeys;
  let listOfImages = [
    {
      description: t(images.development),
      img: web_development,
    },
    { description: t(images.sports), img: sports },
    { description: t(images.responsive), img: responsive },
    { description: t(images.science), img: atom },
  ];

  return (
    <div className={styles.containerImages}>
      {listOfImages.map((ele, index) => (
        <div className={styles.containerImg} key={`img-${index}`}>
          <img src={ele.img} alt="" className={styles.images} />
          <span className={styles.description}>
            {ele.description.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Images;

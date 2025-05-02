import React from "react";
import styles from "./styles.module.scss";
import web_development from "@/assets/images/web_development.png";
import sports from "@/assets/images/sports.png";
import responsive from "@/assets/images/responsive.png";
import atom from "@/assets/images/atom.png";

const Images = ({ state }) => {
  let listOfImages = [
    {
      description: state ? "development" : "desarrollo",
      img: web_development,
    },
    { description: state ? "sports" : "deportes", img: sports },
    { description: "responsive", img: responsive },
    { description: state ? "science" : "ciencias", img: atom },
  ];

  return (
    <div className={styles.container}>
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

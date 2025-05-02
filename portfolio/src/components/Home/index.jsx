import React from "react";
import styles from "./styles.module.scss";
import Photo from "@/components/Photo";
import personalData from "@/personalData.js";

const Home = ({ state }) => {
  let data = state ? personalData[0] : personalData[1];
  return (
    <section className={styles.container} id="Home">
      <Photo state={state} />
      <div className={styles.containerGrap}>
        <div className={styles.containerTitle}>
          <h1>
            {state ? "Hello" : "Hola"}
            <br />
            {(state ? "I am " : "Soy ") + data.firstName}
            <br />
            {data.lastName}
          </h1>
        </div>
        <div className={styles.containerDescription}>
          <span className={styles.span}>
            {state ? "A " : ""}
            <b>{state ? "Web Developer" : "Desarrollador Web"}</b>
            {data.homeDescription}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;

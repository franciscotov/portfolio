import React from "react";
import styles from "./styles.module.scss";

const Container = ({id, children}) => {
  return (
    <section className={styles.container} id={id}>
      {children}
    </section>
  );
};

export default Container;

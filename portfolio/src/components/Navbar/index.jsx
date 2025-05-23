import React, { useState } from "react";
import styles from "./styles.module.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import personalData from "@/personalData.js";
import Language from "@/components/Language";
import { sectionKeys } from "@/components/common/constants";

const icon = (ic) => {
  return () => ic;
};

const Navbar = () => {
  let sections = Object.values(sectionKeys),
    redes = [
      {
        name: icon(<GrLinkedinOption className={styles.icon} />),
        link: "https://www.linkedin.com/in/franciscotov/",
      },
      {
        name: icon(<FaGithub className={styles.icon} />),
        link: "https://github.com/franciscotov",
      },
      {
        name: icon(<FaFreeCodeCamp className={styles.icon} />),
        link: "https://www.freecodecamp.org/franciscotov",
      },
    ];

  const [active, setActive] = useState(false);

  const eventHandler = (e) => {
    e.preventDefault();
    active ? setActive(false) : setActive(true);
  };
  const handlerMenuSelected = (e, name) => {
    e.preventDefault();
    window.location.href = window.location.origin + `/#${name}`;
    setActive(false);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.containerName}>
        <p>
          {`${
            personalData[0].firstName + " " + personalData[0].lastName
          }`.toLocaleUpperCase()}
        </p>
      </div>
      <div className={styles.containerMenu}>
        <div className={styles.containerButton}>
          <button
            onClick={(e) => eventHandler(e)}
            className={active ? `${styles.active}` : `${styles.inactive}`}
            aria-expanded={active ? "true" : "false"}
            aria-disabled={active ? "true" : "false"}
          >
            <span className={styles.titlewrapper}>
              {!active ? (
                <RiMenuFoldFill className={styles.minus} />
              ) : (
                <span className={styles.plus}> </span>
              )}
            </span>
          </button>
        </div>
        <div
          className={
            active
              ? `${styles.containerAcor} ${styles.open}`
              : styles.containerAcor
          }
        >
          <div>
            <Language />
          </div>
          {redes.map((ele, i) => {
            return (
              <div className={styles.red} key={`redes-${i}`}>
                <a href={ele.link} target="_blank" rel="noreferrer">
                  {ele.name()}
                </a>
              </div>
            );
          })}
        </div>
        <div
          className={
            active
              ? `${styles.menuHolderActive} ${styles.menuHolder}`
              : `${styles.menuHolder}`
          }
        >
          <nav className={styles.headerMenu}>
            <ul className={styles.menu1}>
              {sections.map((ele, i) => {
                return (
                  <li className={styles.divSection} key={i}>
                    <a
                      href={ele}
                      className={styles.a}
                      onClick={(e) => handlerMenuSelected(e, ele)}
                    >
                      {ele}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

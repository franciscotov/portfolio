import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { sectionKeys } from "@/components/common/constants";

// --shift moves the colour bands across the name, in band cycles.
// On load the bands sweep in from START_SHIFT and settle at RESTING_SHIFT;
// after that, the pointer and the scroll position nudge them, the way a
// Cruz-Diez physichromie changes colour as you walk past it.
const START_SHIFT = -0.9;
const RESTING_SHIFT = 0.3;
const POINTER_RANGE = 0.7;
const SCROLL_RANGE = 0.8;
const EASING = 0.06;

const usePhysichromie = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      element.style.setProperty("--shift", RESTING_SHIFT);
      return undefined;
    }

    let current = START_SHIFT;
    let target = RESTING_SHIFT;
    let pointerOffset = 0;
    let scrollOffset = 0;
    let frame = null;

    const render = () => {
      current += (target - current) * EASING;
      element.style.setProperty("--shift", current.toFixed(4));
      frame =
        Math.abs(target - current) > 0.0005
          ? requestAnimationFrame(render)
          : null;
    };

    const update = () => {
      target = RESTING_SHIFT + pointerOffset + scrollOffset;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      pointerOffset = (event.clientX / window.innerWidth - 0.5) * POINTER_RANGE;
      update();
    };

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      scrollOffset = progress * SCROLL_RANGE;
      update();
    };

    element.style.setProperty("--shift", START_SHIFT);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);
};

const Home = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { home, data, resume, porfolio } = translationKeys;
  const nameRef = useRef(null);

  usePhysichromie(nameRef);

  const name = (
    <>
      <span className={styles.nameLine}>{t(data.firstName)}</span>
      <span className={styles.nameLine}>{t(data.lastName)}</span>
    </>
  );

  return (
    <section className={styles.hero} id={sectionKeys.home}>
      <h1 className={styles.name} ref={nameRef}>
        <span className={styles.ink}>{name}</span>
        <span className={styles.chroma} aria-hidden="true">
          {name}
        </span>
      </h1>

      <div className={styles.intro}>
        <p className={styles.role}>{t(home.jobDescription)}</p>

        <div className={styles.now}>
          <p className={styles.statement}>{t(home.nowDescription)}</p>
          <p className={styles.learning}>{t(home.secondNowDescription)}</p>

          <p className={styles.links}>
            <a href={`#${sectionKeys.work}`}>{t(home.seeWork)}</a>
            <a href={t(resume.fileURL)} target="_blank" rel="noreferrer">
              {t(home.viewCv)}
              <span className="visually-hidden"> {t(porfolio.newTab)}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

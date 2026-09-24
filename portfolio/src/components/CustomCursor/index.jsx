import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
  const handleMouseOver = (e) => {
    if (e.target.closest("a, button")) {
      cursorRef.current.classList.add(styles.link);
    } else {
      cursorRef.current.classList.remove(styles.link);
    }
  };

  document.addEventListener("mouseover", handleMouseOver);

  return () => {
    document.removeEventListener("mouseover", handleMouseOver);
  };
}, []);

  return <div ref={cursorRef} className={styles.customCursor} />;
}

export default CustomCursor;

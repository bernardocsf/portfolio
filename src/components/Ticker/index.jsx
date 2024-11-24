import React, { useEffect, useRef } from "react";
import styles from "./Ticker.module.scss";

const index = () => {
  const words = [
    "COLLABORATION",
    "TEAMWORK",
    "ETHICS",
    "INNOVATION",
    "CREATIVITY",
  ];

  const tickerRef = useRef(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;

    let start = 0;
    const animate = () => {
      start -= 1;

      if (tickerElement) {
        tickerElement.style.transform = `translateX(${start}px)`;

        if (Math.abs(start) >= tickerElement.scrollWidth / 2) {
          start = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.tickerContainer}>
      <div ref={tickerRef} className={styles.tickerContent}>
        {words.concat(words).map((word, index) => (
          <span key={index} className={styles.tickerWord}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default index;

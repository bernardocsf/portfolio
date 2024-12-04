import React from "react";
import styles from "./Hero.module.scss";
import Social from "../Social";

const index = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroSocialsM}>
        <Social />
      </div>
      <div className={styles.heroTop}>
        <div className={styles.topLeft}>Software Developer</div>
        <div className={styles.topRight}>Contact Me</div>
      </div>
      <div className={styles.heroTitle}>
        <span className={styles.heroTHI}>Hi, I am</span>
        <span className={styles.heroTBernardo}>Bernardo</span>
      </div>
      <div className={styles.heroBottom}>
        <div className={styles.bottomLeft}>
          <Social />
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </div>
  );
};

export default index;

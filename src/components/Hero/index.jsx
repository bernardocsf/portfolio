import React from "react";
import styles from "./Hero.module.scss";
import Social from "../Social";

const index = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTitle}>
        <h1>
          <span>Hi, I am</span>
          <span className={styles.heroTBernardo}>Bernardo</span>
        </h1>
      </div>
      <div className={styles.topLeft}>Software Developer</div>
      <div className={styles.topRight}>Contact Me</div>
      <div className={styles.bottomLeft}>
        <Social />
      </div>
      <div className={styles.bottomRight}>
        <div className={styles.ball}></div>
      </div>
    </div>
  );
};

export default index;

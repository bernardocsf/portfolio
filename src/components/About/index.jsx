import React from "react";
import styles from "./About.module.scss";
import Ticker from "../Ticker";
import Hobbies from "../Hobbies";

const index = () => {
  return (
    <div className={styles.about}>
      <div className={styles.leftSide}>
        <Ticker />
        <div className={styles.info}>
          <p>
            these values are fundamental to me, both personally and
            professionally. They guide mychoices, fostering a positive and
            collaborative environment, while I constantly seek new challenges
            and opportunities for continuous development.
          </p>
          <h1>WHO AM I?</h1>
          <p>
            I introduce myself as a Front-End Developer, but with a foot in
            other areas of web development, aiming to constantly expand my
            horizons. Throughout my journey, I have deepened my knowledge in web
            design, back-end, and SEO.
          </p>
        </div>
        <Hobbies />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.title}>
          <h1>
            <span>about</span>
            <span className={styles.me}>ME</span>
          </h1>
        </div>
        <div className={styles.button}>
          <span>Curriculum Vitae</span>
        </div>
      </div>
    </div>
  );
};

export default index;

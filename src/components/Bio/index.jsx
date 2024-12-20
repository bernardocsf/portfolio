import React from "react";
import styles from "./Bio.module.scss";
import Ticker from "../Ticker";
import Hobbies from "../Hobbies";
import { IoIosArrowForward } from "react-icons/io";

const index = ({ swipeSide }) => {
  return (
    <div className={styles.bioSlide}>
      <div className={styles.titleS}>
        <span>about</span>
        <div className={styles.subTitleS}>
          <span className={styles.meS}>ME</span>
          <span className={styles.bioS}>bio</span>
        </div>
      </div>
      <div className={styles.leftSide}>
        <Ticker />
        <div className={styles.info}>
          <p>
            these values are fundamental to me, both personally and
            professionally. They guide my choices, fostering a positive and
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
      <hr />
      <div className={styles.rightSide}>
        <div className={styles.title}>
          <span>about</span>
          <div className={styles.subTitle}>
            <span className={styles.me}>ME</span>
            <span className={styles.bio}>bio</span>
          </div>
        </div>
        <button className={styles.buttonCV}>
          <a href="BernardoCV.pdf" download="Curriculum Vitae">
            <span>Curriculum Vitae</span>
          </a>
        </button>
        <div className={styles.swipe} onClick={() => swipeSide("skills")}>
            <IoIosArrowForward />
            <IoIosArrowForward />
            <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default index;

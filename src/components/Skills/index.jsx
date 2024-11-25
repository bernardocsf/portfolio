import React from "react";
import styles from "./Skills.module.scss";
import Ticker from "../Ticker";
import Hobbies from "../Hobbies";

const index = ({ onOptionChange, selectedOption }) => {

  const optionChanged = (event) => {
    const value = event.target.value;
    onOptionChange(value);
  };

  return (
    <div className={styles.bioSlide}>
      <div className={styles.leftSide}>
        <Ticker />
        <div className={styles.info}>
          <p>
            these values are fundamental to me, both personally and
            professionally. They guide mychoices, fostering a positive and
            collaborative environment, while I constantly seek new challenges
            and opportunities for continuous development.
          </p>
          <h1>Skills</h1>
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
            <span className={styles.bio}>skills</span>
          </div>
        </div>
        <div className={styles.button}>
          <span>Curriculum Vitae</span>
        </div>
        <div className={styles.radioButtons}>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={optionChanged}
          />

          <input
            type="radio"
            name="option"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={optionChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default index;

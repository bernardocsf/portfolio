import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import Bio from "../Bio";
import Skills from "../Skills";

const index = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [firstTouch, setFirstTouch] = useState(0);
  const [lastTouch, setLastTouch] = useState(0);

  const optionChanged = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);
  

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption("option1");
    }
  }, [selectedOption]);
  

  const handleFirstTouch = (event) => {
    setFirstTouch(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setLastTouch(event.touches[0].clientX);
  };

  const handleLastTouch = () => {
    const diffTouches = firstTouch - lastTouch;

    if (diffTouches > 30) {
      setSelectedOption("option2");
    } else if (diffTouches < -30) {
      setSelectedOption("option1");
    }

    setFirstTouch(0);
    setLastTouch(0);
  };

  return (
    <div
      className={styles.aboutWrapper}
      onTouchStart={handleFirstTouch}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLastTouch}
    >
      <div
        className={`${styles.slideWrapper} ${
          selectedOption === "option2" ? styles.showSkills : ""
        }`}
      >
        <div className={styles.slide}>
          <Bio onOptionChange={optionChanged} selectedOption={selectedOption} />
        </div>
        <div className={styles.slide}>
          <Skills onOptionChange={optionChanged} selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
};

export default index;

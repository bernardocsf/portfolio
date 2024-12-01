import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import Bio from "../Bio";
import Skills from "../Skills";

const index = () => {
  const [selectedOption, setSelectedOption] = useState("bio");
  const [firstTouch, setFirstTouch] = useState(0);
  const [lastTouch, setLastTouch] = useState(0);

  const handleFirstTouch = (event) => {
    setFirstTouch(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setLastTouch(event.touches[0].clientX);
  };

  const handleLastTouch = () => {
    const diffTouches = firstTouch - lastTouch;

    if (diffTouches > 30 && selectedOption !== "skills") {
      setSelectedOption("skills");
    } else if (diffTouches < -30 && selectedOption !== "bio") {
      setSelectedOption("bio");
    }

    setFirstTouch(0);
    setLastTouch(0);
  };

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={styles.aboutWrapper}
      onTouchStart={handleFirstTouch}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLastTouch}
    >
      <div
        className={styles.slideWrapper}
        style={{
          transform:
            selectedOption === "skills" ? "translateX(-50%)" : "translateX(0)",
        }}
      >
        <div className={styles.slide}>
          <Bio
            selectedOption={selectedOption}
            swipeSide={handleRadioChange}
          />
        </div>
        <div className={styles.slide}>
          <Skills
            selectedOption={selectedOption}
            swipeSide={handleRadioChange}
          />
        </div>
      </div>
    </div>
  );
};

export default index;

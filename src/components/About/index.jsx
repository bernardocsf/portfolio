import React, { useState } from "react";
import styles from "./About.module.scss";
import Bio from "../Bio";
import Skills from "../Skills";

const index = () => {
  const [selectedOption, setSelectedOption] = useState("bio");
  const [startTouch, setStartTouch] = useState(0);
  const [currentTouch, setCurrentTouch] = useState(0);

  const handleTouchStart = (event) => {
    setStartTouch(event.touches[0].clientX); 
  };

  const handleTouchMove = (event) => {
    setCurrentTouch(event.touches[0].clientX); 

    const diffTouches = startTouch - currentTouch;

    if (diffTouches > 70 && selectedOption !== "skills") {
      setSelectedOption("skills");
    } else if (diffTouches < -70 && selectedOption !== "bio") {
      setSelectedOption("bio");
    }
  };

  const handleTouchEnd = () => {
    setStartTouch(0);
    setCurrentTouch(0);
  };

  return (
    <div
      className={styles.aboutWrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.slideWrapper}
        style={{
          transform:
            selectedOption === "skills" ? "translateX(-50%)" : "translateX(0)",
        }}
      >
        <div className={styles.slide}>
          <Bio selectedOption={selectedOption} swipeSide={setSelectedOption} />
        </div>
        <div className={styles.slide}>
          <Skills
            selectedOption={selectedOption}
            swipeSide={setSelectedOption}
          />
        </div>
      </div>
    </div>
  );
};

export default index;

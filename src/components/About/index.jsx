import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import Bio from "../Bio";
import Skills from "../Skills";

const index = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  
  const optionChanged = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption("option1")
    }
  })

  return (
    <div>
      <div
        className={`${styles.slideWrapper} ${
          selectedOption === "option2" ? styles.showSkills : ""
        }`}
      >
        <div className={styles.slide}>
          <Bio onOptionChange={optionChanged} selectedOption={selectedOption} />
        </div>
        <div className={styles.slide}>
          <Skills
            onOptionChange={optionChanged}
            selectedOption={selectedOption}
          />
        </div>
      </div>
    </div>
  );
};

export default index;

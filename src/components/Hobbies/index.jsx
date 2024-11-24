import React, { useState, useEffect } from "react";
import styles from "./Hobbies.module.scss";

const index = () => {
  const hobbies = ["travel", "gym", "coding", "playing piano"];

  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHobbyIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hobbiesContainer}>
      <span className={styles.hoobiesTitle}>hobbies like</span>
      <div className={styles.hobbiesContent}>
        <span className={styles.hobbyWord}>{hobbies[currentHobbyIndex]}</span>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import styles from "./Social.module.scss";

const index = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.circle}
    >
      <Icon className={styles.icon} />
    </a>
  );
};

export default index;

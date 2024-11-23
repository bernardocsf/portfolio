import React from "react";
import styles from "./Hero.module.scss";
import SocialCircle from "../Social";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const index = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeTitle}>
        <h1>
          <span>Hi, I am</span>
          <span className={styles.homeTBernardo}>Bernardo</span>
        </h1>
      </div>
      <div className={styles.topLeft}>Software Developer</div>
      <div className={styles.topRight}>Contact Me</div>
      <div className={styles.bottomLeft}>
        <SocialCircle Icon={FiGithub} link="https://github.com/bernardocsf" />
        <SocialCircle
          Icon={RiLinkedinFill}
          link="https://linkedin.com/in/bernardocsf"
        />
        <SocialCircle
          Icon={FaInstagram}
          link="https://www.instagram.com/bernardo_csf"
        />
      </div>
      <div className={styles.bottomRight}>
        <div className={styles.ball}></div>
      </div>
    </div>
  );
};

export default index;

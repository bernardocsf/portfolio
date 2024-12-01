import React from "react";
import styles from "./Skills.module.scss";
import HTMLIcon from "../../assets/icons/html.svg";
import CSSIcon from "../../assets/icons/css.svg";
import SassIcon from "../../assets/icons/sass.svg";
import JSIcon from "../../assets/icons/js.svg";
import TSIcon from "../../assets/icons/ts.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
import BootstrapIcon from "../../assets/icons/bootstrap.svg";
import ReactIcon from "../../assets/icons/react.svg";
import NextIcon from "../../assets/icons/nextjs.svg";
import VueIcon from "../../assets/icons/vue.svg";
import GitIcon from "../../assets/icons/mdi_git.svg";
import { IoIosArrowBack } from "react-icons/io";

const index = ({ swipeSide }) => {
  return (
    <div className={styles.skillsSlide}>
      <div className={styles.titleS}>
        <span>about</span>
        <div className={styles.subTitleS}>
          <span className={styles.meS}>ME</span>
          <span className={styles.skillsS}>skills</span>
        </div>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.title}>
          <span>about</span>
          <div className={styles.subTitle}>
            <span className={styles.me}>ME</span>
            <span className={styles.skills}>skills</span>
          </div>
        </div>
        <div className={styles.buttonCV}>
          <a href="/assets/BernardoCV.pdf" download="Curriculum Vitae">
            <span>Curriculum Vitae</span>
          </a>
        </div>
        <div className={styles.swipe} onClick={() => swipeSide("bio")}>
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
        </div>
      </div>
      <hr />
      <div className={styles.rightSide}>
        <div className={styles.skills}>
          <ul>
            <li>
              <img src={HTMLIcon} />
            </li>
            <li>
              <img src={CSSIcon} />
            </li>
            <li>
              <img src={SassIcon} />
            </li>
          </ul>
          <ul>
            <li>
              <img src={JSIcon} />
            </li>
            <li>
              <img src={TSIcon} />
            </li>
          </ul>
          <ul>
            <li>
              <img src={TailwindIcon} />
            </li>
            <li>
              <img src={BootstrapIcon} />
            </li>
          </ul>
          <ul>
            <li>
              <img src={ReactIcon} />
            </li>
            <li>
              <img src={NextIcon} />
            </li>
            <li>
              <img src={VueIcon} />
            </li>
          </ul>
          <ul>
            <li>
              <img src={GitIcon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;

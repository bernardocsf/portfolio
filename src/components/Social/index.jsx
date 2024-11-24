import React from "react";
import styles from "./Social.module.scss";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const index = () => {
  const socialLinks = [
    { Icon: FiGithub, link: "https://github.com/bernardocsf" },
    { Icon: RiLinkedinFill, link: "https://linkedin.com/in/bernardocsf" },
    { Icon: FaInstagram, link: "https://www.instagram.com/bernardo_csf" },
  ];
  return (
    <div className={styles.socialContainer}>
      {socialLinks.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.circle}
        >
          <Icon className={styles.icon} />
        </a>
      ))}
    </div>
  );
};

export default index;

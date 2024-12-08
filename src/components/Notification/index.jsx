import React, { useEffect, useState } from "react";
import styles from "./Notification.module.scss";

const index = ({ message, type, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);  
    }, 2000);

    const cleanupTimer = setTimeout(() => {
      onClose(); 
    }, 3000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.notification} ${styles[type]} ${
        isExiting ? styles.fadeOut : ""
      }`}
    >
      {message}
    </div>
  );
};

export default index;

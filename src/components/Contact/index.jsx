import React from "react";
import styles from "./Contact.module.scss";

const index = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.leftSide}>
        <span>let's</span>
        <span className={styles.getIn}>get in</span>
        <span>touch</span>
      </div>
      <div className={styles.rightSide}>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input type="text" id="name" placeholder="your name" required />
          </div>
          <div className={styles.inputContainer}>
            <input type="email" id="email" placeholder="your email" required />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              id="message"
              placeholder="your message"
              required
            ></textarea>
          </div>
          <div className={styles.inputContainer}>
            <button type="submit" className={styles.submitButton}>
              go head
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;

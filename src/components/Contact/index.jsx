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
              placeholder="share your thoughts"
              required
            ></textarea>
          </div>
          <div className={styles.inputContainer}>
            <button type="submit" className={styles.submitButton}>
              go head
            </button>
          </div>
        </form>
        <div className={styles.writeMe}>
          <span>or u can just write me to</span>
          <span className={styles.mail}>webernardocsf@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default index;

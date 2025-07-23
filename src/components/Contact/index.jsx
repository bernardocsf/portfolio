import React, { useState, forwardRef } from "react";
import styles from "./Contact.module.scss";
import { MdContentCopy } from "react-icons/md";
import Notification from "../Notification";
import Social from "../Social";

const index = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

  const email = "webernardocsf@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showNotification("Email copiado", "info");
      })
      .catch((error) => {
        console.error("Erro ao copiar o email: ", error);
        showNotification("Erro ao copiar o email", "info");
      });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://bernardoferreira.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification("Mensagem enviada", "info");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showNotification("Erro ao enviar mensagem", "info");
      }
    } catch (error) {
      console.error("Erro: ", error);
      showNotification("Erro ao enviar mensagem", "info");
    }
  };

  return (
    <div ref={ref} className={styles.contact}>
      <div className={styles.leftSide}>
        <span>let's</span>
        <span className={styles.getIn}>get in</span>
        <span>touch</span>
      </div>
      <div className={styles.rightSide}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              name="message"
              placeholder="share your thoughts"
              value={formData.message}
              onChange={handleChange}
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
          <span>or you can just write me to</span>
          <span className={styles.mail}>
            {email}{" "}
            <button onClick={copyToClipboard}>
              <MdContentCopy />
            </button>
          </span>
        </div>
        <div className={styles.socialFooter}>
        <Social />
        </div>
        
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
});

export default index;

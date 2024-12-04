import React, { useState } from "react";
import styles from "./Contact.module.scss";

const index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https:/bernardoferreira.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email enviado com sucesso");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro: ", error);
      alert("Erro ao enviar mensagem");
    }
  };

  return (
    <div className={styles.contact}>
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
          <span>or u can just write me to</span>
          <span className={styles.mail}>webernardocsf@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default index;

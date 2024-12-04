import React, { useState, forwardRef } from "react";
import styles from "./Contact.module.scss";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const index = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "webernardocsf@gmail.com";

  const copy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copiado");
      })
      .catch((error) => {
        console.error("Erro a copiar o email: ", error);
      });
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
        toast.success("Email enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error("Erro: ", error);
      toast.error("Erro ao enviar mensagem.");
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
          <span>or u can just write me to</span>
          <span className={styles.mail}>
            webernardocsf@gmail.com{" "}
            <button onClick={copy}>
              {" "}
              <MdContentCopy />
            </button>
          </span>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
});

export default index;

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer"; //biblio do nodejs para emails
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {  
  const { name, email, message } = req.body;  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de ${name}`,
      text: `Mensagem: ${message}\nE-mail do remetente: ${email}`,
    });

    res.status(200).send({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao enviar email!" });
  }
});

app.use(express.static(path.join(new URL(".", import.meta.url).pathname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(new URL(".", import.meta.url).pathname, "dist", "index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

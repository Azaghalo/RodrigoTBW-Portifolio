import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GlitchText, LinkBtn } from "../components";
import envelope from "../Images/envelope.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, seteMail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (true) {
      emailjs.sendForm("service_etz5bti", "template_q96qu3r", form.current, "IhqN80ZDnGFxVFMEO").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      console.error("Please fill the form");
    }
  };

  return (
    <section className="contact-wrapper">
      <div className="prompt-wrapper">
        <GlitchText text="Entre em contato" />
        <p>Sinta-se à vontade para me enviar uma mensagem com uma proposta de trabalho ou até mesmo me desafiar para um x1 no CS ou no Xadrez.</p>
        <p>Fique à vontade para entrar em contato através do formulário ou enviar um e-mail diretamente para rtbw97@gmail.com.</p>
      </div>
      <form className="email-form" ref={form} onSubmit={sendEmail}>
        <div className="email-form-components">
          <label htmlFor="name">Name:</label>
          <input required id="name" type="text" name="user_name" />
        </div>
        <div className="email-form-components">
          <label htmlFor="email">Email:</label>
          <input required id="email" type="email" name="user_email" />
        </div>
        <div className="email-form-components message-text">
          <label htmlFor="message">Message:</label>
          <textarea required id="message" name="message" />
        </div>
        <LinkBtn btnText={"Enviar"} />
      </form>
    </section>
  );
}

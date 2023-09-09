//require("dotenv").config();
import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

//const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } = process.env;

const Contact = ({ state }) => {
  const form = useRef();
  let msg = state
    ? "If you think I can add value to your team, you can leave me a message and we will schedule a meeting"
    : "Si crees que puedo sumar valor a tu equipo, puedes dejarme un mensaje y agendarémos una reunión";
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9ybyce9",
        "template_oagmqb1",
        form.current,
        "7BB5u9KHGLvC1D0jQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className={styles.container} id="Contact">
      <div className={styles.elements}>
        <h1>{state ? "Contact" : "Contacto"}</h1>
        <div className={styles.line}></div>
        <p>{msg}</p>
      </div>
      <div className={styles.cont_form}>
        <form className={styles.login_form} onSubmit={sendEmail} ref={form}>
          <div className={styles.form__group}>
            <input
              type="text"
              name="name"
              className={styles.form__field}
              placeholder="Name"
              id="name"
              required
            />
            <label htmlFor="name" className={styles.form__label}>
              {state ? "Name" : "Nombre"}
            </label>
          </div>

          <div className={styles.form__group}>
            <input
              type="email"
              name="email"
              className={styles.form__field}
              placeholder="Email"
              id="email"
              required
            />
            <label htmlFor="email" className={styles.form__label}>
              {state ? "Email" : "Correo"}
            </label>
          </div>

          <div className={styles.form__group}>
            <input
              type="text"
              name="subject"
              className={styles.form__field}
              placeholder="Subject"
              id="subject"
              required
            />
            <label htmlFor="subject" className={styles.form__label}>
              {state ? "Subject" : "Asunto"}
            </label>
          </div>

          <div className={styles.form__group}>
            <textarea
              name="message"
              className={styles.form__field}
              placeholder="message"
              id="message"
              required
            />
            <label htmlFor="message" className={styles.form__label}>
              {state ? "Message" : "Mensaje"}
            </label>
          </div>
          <input
            type="submit"
            value={state ? "Send Message" : "Enviar Mensaje"}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useRef } from "react";
import styles from "./styles.module.scss";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { contact } = translationKeys;

  const SERVICE_ID = "service_woaklib";
  const TEMPLATE_ID = "template_534f9sf";
  const PUBLIC_KEY = "user_dOgMI5IkVygmDLf1SPacj";
  function sendEmail(e) {
    console.log(form.current);
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
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
        <h1>{t(contact.title)}</h1>
        <div className={styles.line}></div>
        <p>{t(contact.msg)}</p>
      </div>
      <div className={styles.cont_form}>
        <form className={styles.login_form} onSubmit={sendEmail} ref={form}>
          <div className={styles.form__group}>
            <input
              type="text"
              name="name"
              className={styles.form__field}
              placeholder={t(contact.name)}
              id="name"
              required
            />
            <label htmlFor="name" className={styles.form__label}>
              {t(contact.name)}
            </label>
          </div>

          <div className={styles.form__group}>
            <input
              type="email"
              name="email"
              className={styles.form__field}
              placeholder={t(contact.email)}
              id="email"
              required
            />
            <label htmlFor="email" className={styles.form__label}>
              {t(contact.email)}
            </label>
          </div>

          <div className={styles.form__group}>
            <input
              type="text"
              name="subject"
              className={styles.form__field}
              placeholder={t(contact.subject)}
              id="subject"
              required
            />
            <label htmlFor="subject" className={styles.form__label}>
              {t(contact.subject)}
            </label>
          </div>

          <div className={styles.form__group}>
            <textarea
              name="message"
              className={styles.form__field}
              placeholder={t(contact.message)}
              id="message"
              required
            />
            <label htmlFor="message" className={styles.form__label}>
              {t(contact.message)}
            </label>
          </div>
          <input type="submit" value={t(contact.submit)} />
        </form>
      </div>
    </section>
  );
};

export default Contact;

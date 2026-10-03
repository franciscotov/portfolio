import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import {
  contactEmail,
  contactEmailParts,
  sectionKeys,
  socialMediaUrls,
} from "@/components/common/constants";

const Contact = () => {
  const { t } = useTranslation([translationModulesKeys.Porfolio]);
  const { contact, resume, porfolio } = translationKeys;

  const channels = [
    { label: "LinkedIn", href: socialMediaUrls.linkedin },
    { label: "GitHub", href: socialMediaUrls.github },
    { label: "LeetCode", href: socialMediaUrls.leetcode },
    { label: t(resume.description), href: t(resume.fileURL) },
  ];

  return (
    <section
      className={styles.contact}
      id={sectionKeys.contact}
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">{t(contact.title)}</h2>

      <div className={styles.content}>
        <p className={styles.message}>{t(contact.msg)}</p>
        <a className={styles.email} href={`mailto:${contactEmail}`}>
          {contactEmailParts[0]}
          <wbr />
          {contactEmailParts[1]}
        </a>

        <p className={styles.elsewhere}>{t(contact.elsewhere)}</p>
        <ul className={styles.channels}>
          {channels.map((channel) => (
            <li key={channel.label}>
              <a href={channel.href} target="_blank" rel="noreferrer">
                {channel.label}
                <span className="visually-hidden"> {t(porfolio.newTab)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import {
  contactEmail,
  contactEmailParts,
  languagesKeys,
  navigationSections,
  socialMediaUrls,
} from "@/components/common/constants";

const Navbar = ({ activeSection, menuOpen, onToggleMenu, onSelectSection }) => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { nav, resume, porfolio } = translationKeys;
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const wasOpen = useRef(false);

  const otherLanguage =
    i18n.language === languagesKeys.es ? languagesKeys.en : languagesKeys.es;

  const externalLinks = [
    { label: "LinkedIn", href: socialMediaUrls.linkedin },
    { label: "GitHub", href: socialMediaUrls.github },
    { label: "LeetCode", href: socialMediaUrls.leetcode },
    { label: t(resume.description), href: t(resume.fileURL) },
  ];

  // Move focus into the menu when it opens and back to the button when it closes
  useEffect(() => {
    if (menuOpen) {
      wasOpen.current = true;
      firstLinkRef.current?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onToggleMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, onToggleMenu]);

  return (
    <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ""}`}>
      <a className={styles.hire} href={`mailto:${contactEmail}`}>
        {t(nav.hire)}
      </a>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.language}
          lang={otherLanguage}
          aria-label={t(nav.switchLanguageLabel)}
          onClick={() => i18n.changeLanguage(otherLanguage)}
        >
          {t(nav.switchLanguage)}
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? t(nav.closeMenu) : t(nav.openMenu)}
          onClick={onToggleMenu}
        >
          <span className={styles.menuMask} aria-hidden="true">
            <span
              className={`${styles.menuLabels} ${menuOpen ? styles.menuLabelsOpen : ""}`}
            >
              <span>{t(nav.menu)}</span>
              <span>{t(nav.close)}</span>
            </span>
          </span>
        </button>
      </div>

      <div
        id="site-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        inert={menuOpen ? undefined : ""}
      >
        <nav className={styles.overlayNav} aria-label={t(nav.mainNavigation)}>
          <ul>
            {navigationSections.map((section, index) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${section.id}`}
                    className={styles.overlayLink}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      onSelectSection(section.id);
                    }}
                  >
                    {t(`${nav.sections}.${section.labelKey}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.overlayFoot}>
          <a className={styles.overlayEmail} href={`mailto:${contactEmail}`}>
            {contactEmailParts[0]}
            <wbr />
            {contactEmailParts[1]}
          </a>
          <ul className={styles.overlayExternal}>
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="visually-hidden"> {t(porfolio.newTab)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import styles from "./styles.module.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import { socialMediaUrls } from "@/components/common/constants";

const sections = [
  { name: "Home", href: "Home" },
  { name: "Work", href: "Work" },
  { name: "About", href: "About" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: socialMediaUrls.linkedin,
    icon: <GrLinkedinOption className={styles.icon} />,
  },
  {
    label: "GitHub",
    href: socialMediaUrls.github,
    icon: <FaGithub className={styles.icon} />,
  },
  {
    label: "FreeCodeCamp",
    href: socialMediaUrls.leetcode,
    icon: <FaFreeCodeCamp className={styles.icon} />,
  },
];

const Navbar = ({ activeSection, menuOpen, onToggleMenu, onSelectSection }) => {
  const all = false;
  if (all) {
    return (
      <div className={styles.nav}>
        <a
          className={styles.containerContact}
          href="mailto:francisco.ronaldo.tovar@gmail.com"
        >
          Hire Me
        </a>
        <div className={styles.menu}>
          <button
            className={styles.menuButton}
            onClick={(e) => eventHandler(e)}
          >
            <span className={styles.menuMask}>
              <span
                className={`${styles.menuLabel} ${active ? "" : styles.menuLabelClose}`}
              >
                Close
              </span>
              <span
                className={`${styles.menuLabel} ${active ? "" : styles.menuLabelOpen}`}
              >
                Menu
              </span>
            </span>
          </button>
        </div>
        <div className={styles.containerLogo}>
          <a href="/">
            <span className={styles.logo}>Logo</span>
          </a>
        </div>
      </div>
    );
  }
  return (
    <header className={styles.navbarShell}>
      <a
        className={styles.containerContact}
        href="mailto:francisco.ronaldo.tovar@gmail.com"
      >
        Hire Me
      </a>

      <div className={styles.menu}>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Menu"}
          onClick={onToggleMenu}
        >
          <span className={styles.menuMask}>
            <span
              className={`${styles.menuLabel} ${menuOpen ? "" : styles.menuLabelOpen}`}
            >
              Menu
            </span>
            <span
              className={`${styles.menuLabel} ${menuOpen ? styles.menuCloseActive : styles.menuLabelClose}`}
            >
              Close
            </span>
          </span>
        </button>
      </div>
      <div className={styles.containerLogo}>
        <a
          href="/"
          aria-label="Go to the home section"
          className={styles.logoLink}
        >
          <span
            className={`${styles.logo} ${menuOpen ? styles.logoActive : ""}`}
          >
            FT
          </span>
        </a>
      </div>

      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayOpen : ""}`}
      >
        <div className={styles.menuPanel}>
          <div className={styles.menuInfo}>
            <span className={styles.menuEyebrow}>Navigation</span>
            <h2>Francisco Tovar</h2>
            <p>Full-Stack Engineer</p>

            <div className={styles.socialList}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.menuContent}>
            <span className={styles.menuLabelText}>Menu</span>
            <nav className={styles.menuNav} aria-label="Main navigation">
              {sections.map((section) => {
                const isActive = activeSection === section.name;

                return (
                  <a
                    key={section.name}
                    href={`#${section.href}`}
                    className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ""}`}
                    onClick={(event) => {
                      event.preventDefault();
                      onSelectSection(section.name);
                    }}
                  >
                    <span
                      className={styles.menuIndex}
                    >{`0${sections.indexOf(section) + 1}`}</span>
                    <span>{section.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

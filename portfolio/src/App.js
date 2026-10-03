import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import styles from "@/styles.module.scss";
import "@/config/i18n";
import {
  navigationSections,
  sectionKeys,
} from "@/components/common/constants";

function readEnv(name) {
  return import.meta.env[name] ?? "";
}
const isInMaintenance = () => readEnv("VITE_MAINTENANCE") === "true";

function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState(sectionKeys.home);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const sections = navigationSections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  const handleSectionSelect = useCallback((sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
  }, []);

  if (isInMaintenance()) {
    return <Maintenance />;
  }

  return (
    <Suspense fallback={null}>
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onSelectSection={handleSectionSelect}
      />

      <main className={styles.pageContent} inert={menuOpen ? "" : undefined}>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </Suspense>
  );
}

export default App;

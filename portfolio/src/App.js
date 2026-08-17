import React, { Suspense, useState } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";
import styles from "@/styles.module.scss";
import "@/config/i18n";

const sectionThemeMap = {
  Home: "home",
  Work: "work",
  About: "about",
};

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [maintenance, setMaintenance] = useState(true);

  const handleSectionSelect = (sectionName) => {
    setActiveSection(sectionName);
    setMenuOpen(false);

    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  if(maintenance) {
    return <Maintenance />
  }

  return (
    <Suspense fallback={null}>
      <div
        className={`${styles.appShell} ${styles[sectionThemeMap[activeSection] || "home"]}`}
      >
        <Navbar
          activeSection={activeSection}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((previous) => !previous)}
          onSelectSection={handleSectionSelect}
        />

        <main className={styles.pageContent}>
          <Home />
          <Projects />
          <About />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

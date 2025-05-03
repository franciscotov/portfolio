import "./App.css";
import { Suspense } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import styles from "@/App.module.scss";
import Footer from "@/components/Footer";
import "@/config/i18n";

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.App}>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

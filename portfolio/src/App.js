import "./App.css";
import { Suspense } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import styles from "@/styles.module.scss";
import Footer from "@/components/Footer";
import "@/config/i18n";
import { InfinitySpin } from "react-loader-spinner";
import Images from "@/components/Images";

function App() {
  return (
    <Suspense
      fallback={
        <div className={styles.containerLoading}>
          <InfinitySpin
            visible={true}
            width="200"
            color="#00486B"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      }
    >
      <main>
        <div className={styles.App}>
          <Navbar />
          <Home />
          <About />
          <Images />
          <Experience />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}

export default App;

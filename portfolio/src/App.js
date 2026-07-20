import "./App.css";
import { Suspense } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import styles from "@/styles.module.scss";
import Footer from "@/components/Footer";
import "@/config/i18n";
import { InfinitySpin } from "react-loader-spinner";

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
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}

export default App;

import React, { Suspense, useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const maintenenceMode = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className={styles.containerLoading}>
  //       <InfinitySpin
  //         visible={true}
  //         width="200"
  //         color="#00486B"
  //         ariaLabel="infinity-spin-loading"
  //       />
  //     </div>
  //   );
  // }

  if (maintenenceMode) {
    return (
      <main className={styles.containerMaintenance}>
        <section className={styles.maintenanceCard}>
          <h1>Portfolio in maintenance</h1>
          <p>
            Thanks for visiting. This professional profile is currently being
            updated to share new projects and improvements.
          </p>
          <p>Please check back soon.</p>
        </section>
      </main>
    );
  }
  return (
    <Suspense fallback={null}>
      {/* <main> */}
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* </main> */}
    </Suspense>
  );
}

export default App;

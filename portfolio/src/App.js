import React, { Suspense, useState, useEffect } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Maintenance from "@/components/Maintenance";
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
    return <Maintenance />;
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

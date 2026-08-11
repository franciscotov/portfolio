import React from "react";
import styles from "./styles.module.scss";

function Maintenance() {
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

export default Maintenance;

import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.app}>
      <h1 id="page-wrap" className={styles.header}>
        <span className={styles.headerText}>Home</span>
      </h1>
    </div>
  );
}

export default Home;

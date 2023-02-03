import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Components/sidebar.css";
import styles from "./Home.module.css";

function Home() {
  return (
    <div id="App" className={styles.app}>
      <Sidebar outerContainerId={"App"} />
      <h1 id="page-wrap" className={styles.header}>
        <span className={styles.headerText}>Home</span>
      </h1>
    </div>
  );
}

export default Home;

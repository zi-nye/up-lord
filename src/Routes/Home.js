import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "../Components/sidebar.css";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  const onClickAdminBtn = () => {
    navigate("/admin_page");
  };

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

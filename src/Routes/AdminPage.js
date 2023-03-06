import React from "react";
import FixedSidebar from "../Components/FixedSidebar";
import styles from "./AdminPage.module.css";

function AdminPage() {
  return (
    <div className={styles.sidebar}>
      <FixedSidebar />
    </div>
  );
}

export default AdminPage;

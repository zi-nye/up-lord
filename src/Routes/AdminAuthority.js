import React from "react";
import FixedSidebar from "../Components/FixedSidebar";
import styles from "./AdminAuthority.module.css";

function AdminAuthority() {
  return (
    <div>
      <h1>권한관리</h1>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <FixedSidebar />
        </div>
        <div className={styles.contents}>
          <div className={styles.searching}>
            <div className={styles.searching_}>
              <span>계정 :&nbsp;</span>
              <input />
            </div>
            <div className={styles.searching_}>
              <span>사용자 ID :&nbsp;</span>
              <input />
            </div>
            <div className={styles.searching_}>
              <button>검색</button>
            </div>
          </div>
          <div className={styles.tableDiv}>
            <table>
              <th>계정</th>
              <th>아이디</th>
              <th>권한</th>
              <tr>
                <td>aaa@naver.com</td>
                <td>abc</td>
                <td>Y</td>
              </tr>
              <tr>
                <td>bbb@naver.com</td>
                <td>bcd</td>
                <td>Y</td>
              </tr>
              <tr>
                <td>ccc@naver.com</td>
                <td>ccc</td>
                <td>N</td>
              </tr>
            </table>
          </div>
          <div className={styles.saving}>
            <div className={styles.saving_}>
              <span>계정 :&nbsp;</span>
              <input />
            </div>
            <div className={styles.saving_}>
              <span>사용자 ID :&nbsp;</span>
              <input />
            </div>
            <div className={styles.saving_}>
              <span>권한</span>
              <input type="checkbox" />
            </div>
            <div>
              <button>저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAuthority;

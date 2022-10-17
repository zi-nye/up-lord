import React from "react";
import kakaoLogin from "./kakao_login_large_wide.png";
import logo1 from "./logo1.png";
import styles from "./Login.module.css";

function Login({ onClickLoginBtn }) {
  return (
    <div className={styles.root}>
      <div className={styles.app}>
        <h1 className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo1} alt="logo-img" />
            <div className={styles.logoLetter}>&nbsp;Up Lord</div>
          </div>
          <div className={styles.bible}>
            <div className={styles.bibleVerse}>
              <span className={styles.bibleVerse1over2}>
                <span className={styles.bibleVerse1}>청년이 무엇으로</span>
                <span className={styles.bibleVerse2}>
                  그 행실을 깨끗케 하리이까
                </span>
              </span>
              <span className={styles.bibleVerse2over2}>
                <span className={styles.bibleVerse3}>주의 말씀을 따라</span>
                <span className={styles.bibleVerse4}>삼갈 것이니이다</span>
              </span>
              <span className={styles.bibleName}>시편 119:9</span>
            </div>
          </div>
          <div className={styles.subtitle}>
            <div className={styles.subtitle1}>
              청량교회 청년부 여러분, 환영합니다
            </div>
          </div>
        </h1>
        <div className={styles.kakaoLoginImgDiv}>
          <img
            className={styles.kakaoLoginImg}
            src={kakaoLogin}
            alt="kakao-login"
            onClick={onClickLoginBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

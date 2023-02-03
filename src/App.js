import React, { useEffect, useState } from "react";
import Login from "./Routes/Login";
import Router from "./Routes/router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLoginBtn = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = "http://localhost:3000/oauth";
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URI;
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Router /> : <Login onClickLoginBtn={onClickLoginBtn} />}
    </div>
  );
}

export default App;

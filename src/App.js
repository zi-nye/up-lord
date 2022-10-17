import React, { useState } from "react";
import Login from "./Routes/Login";
import Router from "./Routes/router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onClickLoginBtn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Router /> : <Login onClickLoginBtn={onClickLoginBtn} />}
    </div>
  );
}

export default App;

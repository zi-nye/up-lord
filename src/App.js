import React from "react";
import Router from "./Routes/router";

function App() {
  // TODO: isLoggedIn 말고 context로 체크하자
  //  * 아래 구문 제거하고 각 요청 안에서 관리하자

  return (
    <div className="App">
      {<Router />}
    </div>
  );
}

export default App;

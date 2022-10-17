import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage";
// import CreateGroup from "./CreateGroup";
// import Mypage from "./Mypage";
// import Setting from "./Setting";
// import CompleteCreateGroup from "./CompleteCreateGroup";
// import Chatting from "./Chatting";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_page" element={<AdminPage />} />
        {/* <Route path="/group_:groupId" element={<Group />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

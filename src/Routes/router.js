import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage";
import KakaoAuth from "./KakaoAuth";
import Login from "./Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/oauth" element={<KakaoAuth />} />
        <Route path="/admin_page" element={<AdminPage />} />
        {/* <Route path="/group_:groupId" element={<Group />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

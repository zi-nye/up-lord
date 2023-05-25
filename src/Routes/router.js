import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage";
import AdminAuthority from "./AdminAuthority";
import KakaoAuth from "./KakaoAuth";
import Login from "./Login";
import Attendance from "./Attendance";
import Calendar from "./Calendar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<KakaoAuth />} />
        <Route path="/admin_page" element={<AdminPage />} />
        <Route path="/admin_page/authority" element={<AdminAuthority />} />
        <Route path="/attendance/:date" element={<Attendance />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* <Route path="/group_:groupId" element={<Group />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

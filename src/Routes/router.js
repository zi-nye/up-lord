import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage";
import UserAdmin from './UserAdmin';
import AuthorityAdmin from './AuthorityAdmin';
import MenuAdmin from './MenuAdmin';
import SystemCommonCodeAdmin from './SystemCommonCodeAdmin';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_page" element={<AdminPage />} />
        <Route path="/admin_page/user" element={<UserAdmin />} />
        <Route path="/admin_page/authority" element={<AuthorityAdmin />} />
        <Route path="/admin_page/menu" element={<MenuAdmin />} />
        <Route path="/admin_page/system-common-code" element={<SystemCommonCodeAdmin />} />
        {/* <Route path="/group_:groupId" element={<Group />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

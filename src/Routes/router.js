import React from "react";
import Home from "./Home";
import AdminAuthority from "./AdminAuthority";
import KakaoAuth from "./KakaoAuth";
import Login from "./Login";
import Attendance from "./Attendance";
import Calendar from "./Calendar";

const routes = [
  {
    name: "Home",
    route: "/",
    component: <Home />,
  },
  {
    name: "로그인",
    route: "/login",
    component: <Login />,
  },
  {
    name: "",
    route: "/oauth",
    component: <KakaoAuth />,
    hidden: true
  },
  {
    name: "권한관리",
    route: "/authority",
    component: <AdminAuthority />,
  },
  {
    name: "출석체크하기",
    route: "/attendance/:date",
    component: <Attendance />,
    hidden: true,
  },
  {
    name: "달력",
    route: "/calendar",
    component: <Calendar />,
  },
];

export default routes;

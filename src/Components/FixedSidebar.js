import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

function FixedSidebar() {
  const menus = [
    { name: "사용자 관리", path: "/admin_page/user" },
    { name: "권한 관리", path: "/admin_page/authority" },
    { name: "메뉴 관리", path: "/admin_page/menu" },
    { name: "시스템 공통 코드 관리", path: "/admin_page/system-common-code" },
  ];

  return (
    <div>
      {menus.map((menu, index) => {
        return (
          <Link
            to={menu.path}
            key={index}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SidebarItem menu={menu} />
          </Link>
        );
      })}
    </div>
  );
}

export default FixedSidebar;

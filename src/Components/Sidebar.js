import React from "react";
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/admin_page">
        관리자 설정
      </a>
    </Menu>
  );
}

export default Sidebar;

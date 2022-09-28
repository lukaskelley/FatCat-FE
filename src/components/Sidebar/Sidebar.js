import React from "react";
import navbarItems from "../NavbarItems";
import 'antd/dist/antd.min.css';
import "./Sidebar.css";

import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icons">
        <div className="mobile-menu-icon">
          <CloseOutlined className="close-icon" onClick={toggle} />
        </div>
      </div>

      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item, index) => (
            <Link to={item.link} key={index} className="sidebar-links">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

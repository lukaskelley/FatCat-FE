import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Col, Row } from "antd";
import 'antd/dist/antd.min.css'
import { MenuOutlined } from "@ant-design/icons";

import Logo from "../../assets/logo-pink.svg"

const Navbar = ({ toggle }) => {
  const controlMobileMenu = (num) => {
    var header = document.getElementById("headerMenu");
    var a = header?.getElementsByClassName("nav-link");

    if (a != null) {
      for (var j = 0; j < a.length; j++) {
        if (a[j].classList.contains("active")) {
          a[j].classList.remove("active");
        }
      }

      a[num].classList.add("active");
    }
  };
  return (
    <nav>
      <Row className="Navbar">
        <Col lg={1} className="logo" xs={1}>
          <a href={"/"}><img className="logo" src={Logo} alt=""/></a>
        </Col>
        <Col lg={3} xs={2}/>
        <Col lg={16} xs={16}id="headerMenu" className="headerMenu">
          <Link
            className="active nav-link"
            to={"/"}
            onClick={() => controlMobileMenu(0)}
          >
            HOME
          </Link>
          <Link
            className="nav-link"
            to={"/mint"}
            onClick={() => controlMobileMenu(1)}
          >
            MINT
          </Link>
          <Link
            className="nav-link"
            to={"/roadmap"}
            onClick={() => controlMobileMenu(2)}
          >
            ROADMAP
          </Link>
          <Link
            className="nav-link"
            to={"/membership"}
            onClick={() => controlMobileMenu(3)}
          >
            MEMBERSHIP
          </Link>
          <Link
            className="nav-link"
            to={"/faq"}
            onClick={() => controlMobileMenu(4)}
          >
            FAQ
          </Link>
        </Col>
        <Col lg={4}  xs={4} className="contactMenu">
          <a href={"/"}>
            <i className="fab fa-twitter" />
          </a>
          <a href={"/"}>
            {" "}
            <i className="fab fa-discord" />
          </a>
        </Col>
        <Col lg={2} className="mobileMenu">
          <div className="mobile-menu-icon">
            <MenuOutlined onClick={toggle} className="MenuOutlined" />
          </div>
        </Col>
      </Row>
    </nav>
  );
};

export default Navbar;
